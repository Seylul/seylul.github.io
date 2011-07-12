---
layout: post
title: Flaş'tan ubuntu kurulumu
---
LGx120 netbook kullanıyorum ubuntu 11.04 yüklüydü çeşitli nedenlerden dolayı format atma ihtiyacı hissettim. Harici bir optik sürücüm de olmadığı için flaş diskten kurulum yaptım.

Öncelikle [ubuntu](ubuntu.com)'yu bilgisayarımıza indiriyoruz. Burada 32bit mi 64bit mi dikkat edelim.

    **Kontrol merkezi -> donanım ->başlangıç diski oluşturucu** 
şeklinde açıyoruz. Kaynak disk kalıbı yazan yerin sağ alt kısmındaki **Diğer** seçeneğine tıklayıp ISO dosyasını indirdiğimiz yeri seçiyoruz.
Flaş diskimizin içi doluysa onları yedeklemekte fayda var çünkü 
    
    **kullanılacak olan disk** kısmına ;
    **Diski sil** 
diyerek format atıyoruz.Bu işlemden sonra 

    **Başlangıç diski oluştur** diyoruz ve işlem sona eriyor.

Bilgisayarı kapatıp flaş diskimizi takıp tekrar başlatıyoruz.  
*Install* ekranında *try ubuntu* seçeneğini seçiyoruz çünkü bölümlendirmeyi yapacağız.  
**gparted** kurup bölümlemelere bakabiliriz.Bunun için

	sudo apt-get install gparted 
yazmanız yeterli. Bilgisayar en fazla 4 bölüme ayrılabiliyor anladığım kadarıyla yeterli bölüm yoksa /extended(uzatılmış) bölüm açıp altına swap ve ext4 gibi alanları istediğimiz boyutta oluşturabiliriz.  
Bu bölümlendirme işlemini kurulum sırasında yapmak istiyorsanız direkt   
*Install* ekranından *install ubuntu* seçeneğini seçerek devam edebilirsiniz.

Geri kalan işlemler basit zaten. Kurulum sonrasında **Ubuntu kurulumu sonrasında yapılması gerekenler** şeklinde basit bir google araması yapılıp uygulanırsa yerinde ve faydalı olur.







