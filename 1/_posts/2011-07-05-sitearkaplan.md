---
layout: post
title: Github sitesi için arkaplan ayarlamaları
---
Github sitesi için arkaplan resmi değiştirilmek istenirse;
sitenin klasörünün bulunduğu dizinden(xyz.github.com), chrome dizinine gelinir ve 
    
    local.css 
içinde değişiklik yapılır.Peki bu değişiklik nasıl olmalıdır.Bunu yapabilmek için ufak bir 'css' kodu gerekli söyleki;
	
    body { //sayfanın body kısmında değişiklik yapacağımız için
    background-color: none; //arkaplan rengi boş (none) olacağı için
    background-image:url('../chrome/arkaplanresmi.jpg'); //arkaplana koyacağımız resmin yolunu parantezler içine yazmak için
    background-repeat:no-repeat; //resmin tekrarlamasını istemiyorsak
    background-size:100%; //resmin boyutunu ayarlamak istiyorsak
    }
  



