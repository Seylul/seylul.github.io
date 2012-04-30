---
layout: post
title: Wordpress'de temanın page.php'sinde sayfa çağırmak
---

Temanın admin panelinden oluşturulan tüm sayfalar tema klasöründeki page.php şablonundan türetilmektedir.
Eğer siz sadece tek bir sayfa için özellikler eklemek istiyorsanız mesela forum sayfası dışında tüm sayfalarda comment bloglarını kapatmak
istiyor iseniz `comments_template()` fonksiyonunu forum sayfası id'si için kullanabilirsiniz yada katı bağlantı kullanıp `$page_id` değişkeni
yerine sayfanın isminide page.php içinde if koşulu altına alıp sadece bu id'ye veya isime sahip sayfalara yorum bloglarını açabilirsiniz.

Eğer sayfa şablonlarında yapacağınız değişiklik bu denli küçük çapta değil ise yani diyelim ki footer'ın hemen üstüne javascript ile akan
bir duyuru koymak istiyorsanız.Örneğin duyuru.php sayfası oluşturdunuz ancak bunda sadece duyuru kısmı ( yani banner vs. kısımları yok ) var ve js kodunu duyuru.js 'den ve css'inide
duyuru.css 'den aldıgınız varsayalım bu durumda page.php içinde `include("duyuru.php")` çağrısı duyuru.js ve duyuru.css dosyalarını görmeyecektir.
Bunları duyuru.php içinde değilde temanın içinde bulunan `header.php` tanıtmalıyız.

Not: include fonksiyonu yerine require fonksiyonuda kullanılabilir. 
