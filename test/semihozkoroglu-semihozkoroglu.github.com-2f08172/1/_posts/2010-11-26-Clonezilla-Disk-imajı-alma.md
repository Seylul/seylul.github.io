---
layout: post
title: Clonezilla ile Disk imajı almak ve alınan imajı kullanmak
---

Öncelikle clonezilla'nın farklı kullanım methodları var ben sistemimizde bulunan işletim sistemlerinin yani diskimizin yedeğinin nasıl alınacagını ve
alınan yedeğin sisteme nasıl geri yükleneceğinden bahsedicem.

Aslında benzer adımlar tek fark kopyalanacak disk alanı.

İlk olarak indirmiş olduğumuz `clonezilla` iso dosyasını cd'ye yazdırmamız ve sistemimizi bios'tan cd'den çalışabilir duruma getirmeliyiz.

Bu aşamadan sonra aşağıdaki adımları uygulayabiliriz.

[`Adım-1`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010163.jpg) 'deki gibi clonezilla live ile giriş yapıyoruz.

[`Adım-2`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010164.jpg) Dili şeçerek devam ediyoruz.

[`Adım-3`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010165.jpg) 'deki şeçimi yaparak devam ediyoruz.

[`Adım-4`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010166.jpg) ....

[`Adım-5`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010167.jpg) Burada istersek sistemimizde sadece bir bölümü 
yedekleyebiliriz ben windows ve ubuntu olmak üzere iki sistemide yedeklediğim için device-device şeçeneği ile devam ettim.

[`Adım-6`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010168.jpg) ...

[`Adım-7`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010169.jpg) Burada diskimizi local'e bağlı bir diskemi yoksa uzaktaki bir 
diskemi yani network üzerinden ve aynı durumlar komple disk değilde şeçilmiş olan bölüm durumundada geçerli.

[`Adım-8`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010170.jpg) Ve can alıcı nokta..Burada öncelikle kopyalanak olanı seçiyoruz
bir sonraki adımda kopyalanacağı diski seçiyoruz.

[`Adım-9`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010171.jpg) Kendi diskim..

Ben burada harici bir Toshiba disk bağlamıştım yani aslında yedeklenmiş dosyalarımı hardiske kopyalamayı gösteriyorum başlangıçtaki durum yani yedek alırken
tam tersini gerçekleştirmiştim.İlk önce bilgisayarımın diskini `(Kopyalanacak veri)` daha sonrasında Toshiba diskini `(Kopyalanacak alan)` 'ı seçmiştim.

Şunuda belirtim partition yedeği alırken yani sadece bir sistemin yedeğini alırken misal ubuntunun o zaman kopyalanak alan olarak kendi diskimizide seçebiliyoruz.
ancak diskimizin komple yedeğini alırken harici bağlamak durumundayız.

Networkten yedek alma durumuna henüz giremedim..

[`Adım-10`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010176.jpg) Aslında 10.adımdan 3 tane daha var yani 4 tane yes diyerek devam edicez.

[`Adım-11`](https://github.com/semihozkoroglu/File/raw/master/Clonezilla-Resim/25112010177.jpg) Ve kopyalama gerçekleşiyor sistemimiz cincik gibi..


