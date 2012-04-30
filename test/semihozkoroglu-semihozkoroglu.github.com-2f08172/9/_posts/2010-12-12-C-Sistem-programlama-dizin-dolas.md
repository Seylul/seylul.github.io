---
layout: post
title: C sistem programlama dizin dolaşmak 
---

	#include <stdio.h>
	#include <stdlib.h>
	#include <dirent.h>
	#include <string.h>
	#include <sys/stat.h>
	#define MAX_PATH_SIZE 1024
	void DirWalk(const char *path, void (*Proc) (const char *))
	{
		char fname[MAX_PATH_SIZE];
		struct dirent *de;
		struct stat status;
		DIR *dir;
		if ((dir = opendir(path)) == NULL) {
			perror("opendir");
			return;
		}
		while ((de = readdir(dir)) != NULL) {
			sprintf(fname, "%s/%s", path, de->d_name);
			Proc(fname);
			if (strcmp(de->d_name, ".") != 0 && strcmp(de->d_name, "..") != 0) {
				if (stat(fname, &status) == -1) {
					perror("stat");
					break;
				}
				if (S_ISDIR(status.st_mode))
					DirWalk(fname, Proc);
			}	
		}
		closedir(dir);
	}
	void Disp(const char *name)
	{
		puts(name);
	}
	int main(int argc, char *argv[])
	{
		char fname[MAX_PATH_SIZE];
		char *plast;
		if (argc != 2) {
			printf("Usage: dirtree <path>\n");
			exit(1);
		}
		strcpy(fname, argv[1]);
		plast = strchr(fname, '\0') - 1;
		if (*plast == '/')
			*plast = '\0';
		DirWalk(fname, Disp);
	return 0; 
	}
`void DirWalk(const char *path, void (*Proc) (const char *))` ifadesinde *path ile /etc gibi bir string ve bir fonksiyon işaretçisi alırız.

`struct dirent *de;`dirent yapısında d_ino ve d_name yapıları bulunmaktadır.Buradan readdir fonksiyonunun struct döndüğünü görebiliriz.

`if (strcmp(de->d_name, ".") != 0 && strcmp(de->d_name, "..") != 0) {`"." bulundugu dizin,".." üst dizini gösterdiğinden programın tekrardan bu dizinlere girmesini engelliyor.

strcmp fonksiyonunun harf harf karşılaştırma yapmakda yukarıdaki ifademizde dosya adı "." veya ".." olduğunda strcmp sıfır değeri dönecektir.

`if (stat(fname, &status) == -1) {` stat fonksiyonu başarısızlık durumunda -1 döner.Ve status dosya bilgilerini tutar(örnek:dosya erişimindeki izin bilgileri gibi).
Ancak burada kullanılmasının amacı her gelişinde değişen fname ile birlikte status durumunuda set etmek ve S_ISDIR fonksiyonunda kullanmak.

`perror("stat");` perror fonksiyonunu çıktısı "stat:burası errno değişkenine karşılık gelen mesaj metni" şeklinde olur.
errno değişkenine mesaj metni stat fonksiyonu tarafından yukarıdaki kontrolde set edilmiştir.

`if (S_ISDIR(status.st_mode))` Status değişkeninde dosya bilgileri tutuluyordu burada dosyanın dizin mi ? kontrolünü yapar evetse özyineli yapıya dönüşür.

`DirWalk(fname, Proc);` proc fonksiyon göstericisine ana fonksiyonda Disp'i atamıştık zaten.

`plast = strchr(fname, '\0') - 1;` strchr belirtilen karakteri ilk bulduğunda belirtilen karekterin adresini dönmektedir.

`if (*plast == '/')` gelen path'in sonundaki "/" ifadesini kaldırıyoruz.

`DirWalk(fname, Disp);` path'i ve puts çıktısını üreten fonksiyonumuzu işaret ediyoruz.