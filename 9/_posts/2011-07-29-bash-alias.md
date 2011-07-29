---
layout: post
title: komut adını değiştirme
---
Diyelim çok kullandığımız fakat uzun bir komutumuz var. Örneğin;  
Bir dosyayı açarken **projeler -> seylul.github.com -> 0 -> \_post** yolunu izliyoruz.Burada bize _alias_ komutu yardımcı oluyor. Kodun kullanış şekli şu biçimdedir;

    alias Yeni_komut_adi="eski_komut_adi"
örneğimiz için uyarlıyacak olursak;

    alias site1="cd projeler/seylul.github.com/0/_posts"
işlem tamam, fakat o da ne terminali kapattık ve işlemimiz kaydedilmedi :(  
Bunun olmaması için bu yazdığımız komutu  **.bashrc** içine
kaydetmemiz lazım ki bilgisayarı ya da terminali her kapatıp
açtığımızda aynı komutu tekrarlamayalım.

