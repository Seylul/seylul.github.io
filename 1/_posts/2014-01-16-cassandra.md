---
layout: post
title: Cassandra nedir?
---

Cassandra, Java ile geliştirilmiş, açık kaynak(open source), nosql veritabanı tipidir. Okulda öğrendiğimiz Mysql bir ilişkisel veri tabanı mesela. İlişkisel veritabanı alışılagelmiş adıyla RDBMS (Relational Database Managament Systems)'de sorgulama için SQL dili kullanılırken, Nosql'de sorgular yer almıyor. Verilerimiz RDBMS'deki gibi tablolarda tutulmuyor, onun yerine JSON ya da XML formatında column base yapısını kullanarak kaydediliyor. Column base derken Cassandra bir kaç farklı sunucuda üzerinde dağıtık şekilde çalışabildiği için verileri yatay olarak ölçekleyebiliyoruz. Ana makineye bağlı sunucular üzerine kurulu değil bu yapı, sunucu istemci mantığıyla değil de peer to peer mantığıyla çalışıyor. Bütün makineler eşit makinelerden biri çöktüğünde sistem durup diğer makinelerin çalışmasını etkilemiyor..  Bu da kullanımımızı kolaylaştırıyor.  

Hız açısından önemli bir veritabanı olduğundan genelde hızlı arama yapılan ve databaseleri büyük olan servislerin tercihi oluyor. Doğruluğunu araştırmadım fakat internette okuduğum kadarıyla Facebook, Twitter, Amazon gibi devler, veritabanı ihtiyacında Cassandra'yı kullanıyor.  


