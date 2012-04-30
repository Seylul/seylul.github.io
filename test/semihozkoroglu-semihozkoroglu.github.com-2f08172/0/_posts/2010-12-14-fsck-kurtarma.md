---
layout: post
title: Güncelleme Yöneticisine dikkat
---

Bugün çok garip bir durumla karşılaştım aslında karşılaştığım durum basit ama karşılaşma zamanı garip oldu..

yaklaşık olarak 3 saat önce bir blog'ta adamın karşılaştığı ilginç bir olayı okuyordum yani adama göre beklenmeyen
bir durum olduğu için ilginçmiş dosya sistemini çok dikkatli kullanmasına rağmen nedini bilmediği bir şekilde terminale düşmüş

terminal diyorum terminal eminlatörü değil yani =) herneyse ondan sonra dosya sistemini düzenlemesi için fsck komutunun oldugunu görmüş.
Yani fsck dosya sistemindeki küçük hataları giderir gideremediği büyük hatalar içinde kullanıcıya uyarı veren bir programdır.
Bu şekilde oturumuna geri dönmüş.Beni ilgilendiren kısmı bu yazıyı okuduktan 15 dk sonra bilgisayarımın güncelleme yöneticisinin karşıma çıkıp
donmasıyla başladı.Bu durumda gayet sogukkanlı bir şekilde ana şartele basılı tutarak kapattım ancak açtığım zaman disk'i check ediyor fakat açılmıyordu
2. denememde bu sefer okuduğum şahsın düştüğü terminale bende düştüm ve dedim bu arkadaşı fsck kurtardıysa beni neden kurtarmasın ve tabiki bunları sogukkanlı
bir şekilde yapıyorum.Ve bende oturumuma dönmeyi başardım.

Burada dikkat etmemiz gereken nokta bilgisayarı düzgün kapatmadığımdır ve bu durumda superblocklara düzgün kapanmadıgına dair işaret biti yerleşmekte ve
check etme durumu bu şekilde başlamaktadır.Ext3 dosya sistemleri günlüklü yapıda olduklarından check ile düzgün yapısına dönüşür.Peki ya check etme esnasında fsck'nın yaptıgı
durumun aynısını gerçekleştirmedi mi ? 

işte böyle bir garip durumla karşılaştım eğer bunu okuyorsanız dikkat edin sizde terminale düşebilirsiniz o durumda
fsck kurtarıyor =)