---
layout: post
title: Github ssh bağlantı hatası
---

Ubuntu 10.10 netbook sürümünden 11.04 sürümüne yükseltme yaptıktan sonra konsoldan githubdaki depoma erişirken aşağıdaki hatayı almaya başladım. Ve bu hatayı almadan önce uzun bir süre beklemede kalıyordum.

"Read from socket failed: Connection reset by peer"
"fatal: The remote end hung up unexpectedly"

Daha sonra help.github.com adresindeki işlemleri tekrardan uygulamadım bu sefer 

"permission denied(publickey)" 
hatası almaya başladım ssh içinde config dosyasını github'ın help sayfasındaki hatalar kısmında belirttiği gibi düzenledim ancak yine aynı hatayı aldım.Farklılık olsun diye en son 'id_rsa.pub' dosyasının içeriğini hesabıma eklerken kopyalamayı vim ile değilde geditle açtıktan sonra yaptım bu sefer ssh git@github.com komutuyla bağlantımı kontrol etmek istediğimde 'PTY allocation request failed on channel 0'bu cevabı alıyorum hata olup olmadığını bilmiyorum çünkü şuanda depoma erişebiliyorum. 
Sanırım key dosyasının içeriğinin vim'de iken kopyaladığım için bu durumları yaşadım.
Benzer sorunu yaşayan arkadaşlarımla burada konuşmuşmuştuk sorunu halledemeyenler buradan da yararlanabilirler.

'https://gist.github.com/1021381' 

Burada bir güncelleme yapıyorum,yukarıda vermiş olduğum linkteki en alttaki
çözüm yöntemini denedim işe yaradı, oradan da faydalanabilirsiniz.
