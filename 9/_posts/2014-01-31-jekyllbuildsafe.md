---
layout: post
title: Jekyll build --safe
---

Merhabalar şu an okumakta olduğunuz bloğuma yazdığım yazıları push ederken bir hata ile karşılaşıyordum.  


	The page build failed with the following error:

	The file `1/_posts/2014-01-16-cassandra.md` contains markdown errors.

	For information on troubleshooting Jekyll see:

  	https://help.github.com/articles/using-jekyll-with-pages#troubleshooting

	If you have any questions please contact us at https://github.com/contact.  

uyarıda yayınlamak istediğim makalenin markdown hataları içerdiğini yazıyordu. Ama düzeltmeme rağmen sorunun nereden kaynaklandığını bulamıyordum. İşte son durumda şu komut imdadıma yetişti:  

	~$jekyll build --safe  

komutunu kullandığımda bana markdown dosyamda yaptığım yazım hatalarını gösteriyordu. Ben de bunları düzeltip kaydettikten sonra yazımı bloğumdan yayınlamayı başardım. 
