---
layout: post
title: Flaş'tan ubuntu kurulumu
---
LGx120 netbook kullanıyorum ubuntu 11.04 yüklüydü çeşitli nedenlerden dolayı format atma ihtiyacı hissettim. Harici bir optik sürücüm de olmadığı için flaş diskten kurulum yaptım.

Öncelikle [ubuntu](http://www.ubuntu.com/)'yu bilgisayarımıza indiriyoruz. Burada 32bit mi 64bit mi dikkat edelim.

    Kontrol merkezi -> donanım ->başlangıç diski oluşturucu 

şeklinde açıyoruz. Kaynak disk kalıbı yazan yerin sağ alt kısmındaki **Diğer** seçeneğine tıklayıp ISO dosyasını indirdiğimiz yeri seçiyoruz.
Flaş diskimizin içi doluysa onları yedeklemekte fayda var çünkü 
    
    Kullanılacak olan disk kısmına ;
    Diski sil 

diyerek format atıyoruz.Bu işlemden sonra 

    Başlangıç diski oluştur 
diyoruz ve işlem sona eriyor.

Bilgisayarı kapatıp flaş diskimizi takıp tekrar başlatıyoruz.  
*Install* ekranında *try ubuntu* seçeneğini seçiyoruz çünkü bölümlendirmeyi yapacağız.Bölümlendirme işlemini kurulum sırasında da yapabilirsiniz. Bunun içn gelen ekranda *install ubuntu* seçeneğini seçebiliriz.Try ubuntuyu seçtiysek sıradaki adım;
**gparted** kurup bölümlemeleri düzenlemektir.Bunun için

	sudo apt-get install gparted 

yazmanız yeterli. Bilgisayar en fazla 4 bölüme ayrılabiliyor anladığım kadarıyla yeterli bölüm yoksa /extended(uzatılmış) bölüm açıp altına swap ve ext4 gibi alanları istediğimiz boyutta oluşturabiliriz.Ext4 alanı ubuntunun kurulacağı hard disk alanıdır. Boyutunu 20GB civarında tutmamız yeterli olur. Swap alanı, bilgisayar sabit diskte fazla işlem yaptığında yer kalmazsa kullanılan yerdir. Bir nevi RAM gibi. Ram'lerin kapasitesi şimdiki bilgisayarlarda fazla olduğu için bu alanı çok fazla tutmamıza gerek yok. 4GB RAM'li bir bilgisayarda swap alanını 256MB bile alabilirsiniz. Ram'i düşük olan bilgisayarlarda bu alanı Ram boyutunun 2 katı alınması önerilir. 

Bölümleme işleminden sonra bilgisyarı tekrar başlatıp **Install** ekranından **install ubuntu** seçeneğini seçerek devam edebilirsiniz.

Geri kalan işlemler basit zaten. Kurulum sonrasında **Ubuntu kurulumu sonrasında yapılması gerekenler** şeklinde basit bir google araması yapılıp uygulanırsa yerinde ve faydalı olur.







