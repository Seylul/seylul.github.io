---
layout: post
title: Wordpress tema ayarlarını değiştirme
---
[Wordpress](http://www.wp-tr.org/ "wordpress")'i sitesinden **/var/www** dizini içine indiriyoruz.Yeni bir tema eklemek için indirdiğimiz temayı (internette ufak bi göz gezdirmeyle rahatlıkla bulunabilir), 

	var/www/wp-content/themes 

dizinine atalım.    
 Tarayıcıya;

	localhost/var/www/wp-content/themes/temaadi

yazınca sayfanın boş döndüğünü görürüz. Çünkü gerekli ayarlar yapılmamıştır.Bunun için tarayıcıya;

	localhost/wordpress 

yazıp yapılandırma dosyasını yarat kısmına tıklayıp veritabanımızı oluşturuyoruz.Ya da 

	wordpress -> wp-config-sample.php 

adlı dosyadan da ayarları yapabiliriz. Fakat burada dikkat edilmesi gereken kısım her iki durumdan sonra da
	
	wp-config-sample.php  ---> wp-config.php

olarak değiştirilmesidir.
 Dosya izinlerini de açtıktan sonra istediğiniz değişikliği yaparak tema üzerinde oynayabilirsiniz.Dosya izinlerini şu komutla açabilirsiniz.

	chmod 777 dizinadi 

