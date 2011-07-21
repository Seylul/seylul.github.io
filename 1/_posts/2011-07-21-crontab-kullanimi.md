---
layout: post
title: crontab kullanımı
---
Crontab dosyası; tek bir satırda, belirtilen zamanda gerçekleştirilebilecek olan komutlardan oluşur. Crantab'a belli periyotta verilen komutu çalıştırması için (ki bu sunucularda çok işe yarayan bir özelliktir) şu adımları izleyebiliriz. Öncelikle bash script dosyamızı oluşturalım;

	vi ornekscript.sh
içine çalıştırmak istediğimiz komutları sırasıyla yazıyoruz. Kaydettikten sonra
izinleri düzenleyelim (çalıştırılabilir yapalım.) ;

	chmod +x ornekscript.sh
şimdi;

	crontab -e (edit-duzenliyoruz)
komutunu vererek düzenliyoruz.
**Nasıl mı?**
Crontab'da her satır ayrı bir girdiyi ifade eder ve satır formatı şu şekildedir;

	 * * * * * /calisacak/programin/yeri/programim.calistir

Burada koyduğumuz yıldızların her birinin birer anlamı vardır.  
1. yıldız dakikayı ifade eder, 0 – 59 arasında değer alır.  
2. yıldız ise saati belirler, 0 ile 23 arasında bir değer alır.  
3. yıldız ayın günlerini ifade eder.  
4. yıldız ayları,
5. yıldız da haftanın günlerini ifade eder (0 ya da 7  değerlerinin pazar gününü
   ifade eder.).  

Örneğin;  
/root/scripts/backup.sh betiğimizi her gece saat 00:00 da çalıstıracak bir
crontab içeriği şu şekildedir:

	00 00 * * * /root/scripts/backup.sh
Mesela günün belirli 2 saatinde çalıştırmak istiyoruz. sabah 9 da ve öğlen 3 te:

	00 09,15 * * * /root/scripts/backup.sh
Son olarak yapılacak işlerin silinmesi için;

	crontab -r
listelenmesi için ;

	crontab -l 
komutlarını kullanabiliriz.

