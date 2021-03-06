---
layout: post
title: Cassandra nedir?
---

Cassandra, Java ile geliştirilmiş, açık kaynak(open source), nosql veritabanı tipidir. Okulda öğrendiğimiz Mysql bir ilişkisel veri tabanı mesela. İlişkisel veritabanı alışılagelmiş adıyla RDBMS (Relational Database Managament Systems)'de sorgulama için SQL dili kullanılırken, Nosql'de sorgular yer almıyor. Verilerimiz RDBMS'deki gibi tablolarda tutulmuyor, onun yerine JSON ya da XML formatında column base yapısını kullanarak kaydediliyor. Column base derken Cassandra bir kaç farklı sunucuda üzerinde dağıtık şekilde çalışabildiği için verileri yatay olarak ölçekleyebiliyoruz. Ana makineye bağlı sunucular üzerine kurulu değil bu yapı, sunucu istemci mantığıyla değil de peer to peer mantığıyla çalışıyor. Bütün makineler eşit makinelerden biri çöktüğünde sistem durup diğer makinelerin çalışmasını etkilemiyor..  Bu da kullanımımızı kolaylaştırıyor.  

Hız açısından önemli bir veritabanı olduğundan genelde hızlı arama yapılan ve databaseleri büyük olan servislerin tercihi oluyor. Doğruluğunu araştırmadım fakat internette okuduğum kadarıyla Facebook, Twitter, Amazon gibi devler, veritabanı ihtiyacında Cassandra'yı kullanıyor.  


Cassandra'nın Mysql ile karşılaştırılmasıyla ilgili ise şöyle bir tablo var :  

MySQL karşılaştırması :  

•MySQL > 50 GB Data  
Writes Average : ~300 ms  
Reads Average : ~350 ms  

•Cassandra > 50 GB Data  
Writes Average : 0.12 ms  
Reads Average : 15 ms  

Cassandra'da, veri insert etmek için iki yöntemi kullanabiliriz, cqlsh'ı ya da cassandra-cli 'yi.
Komut satırına cqlsh/cassandra-cli yazdığımızda:   

	$cqlsh  
	cqlsh>exit  
-  
-  
	$cassandra-cli  
	\[default@unknown]exit;  

düştüğümüz komut satırı etiketleri yukarıdaki gibi olur.
CQLsh ile Cassandra-cli arasında kullanım farklılıkları var size birkaç kullanım şeklini gösteriyim :

####Cqlsh   

CREATE KEYSPACE: CREATE KEYSPACE foo WITH replication={ 'class' :'SimpleStrategy','replication_factor' : 1 } ;  

USE : use foo;  

CREATE TABLE : CREATE TABLE User (user_id varchar PRIMARY KEY, first varchar, last varchar, age int);  

INSERT : INSERT INTO User (user_id, first, last, age)  VALUES ('ying', 'Eylul', 'AKBAS', 23);  

GET :SELECT * FROM User;  

####Cassandra-cli  
  
CREATE KEYSPACE: create keyspace bar  

USE : use bar  

CREATE TABLE :  
- create column family User with comparator = UTF8Type;  
- update column family User with column_metadata =[{column_name: first, validation_class: UTF8Type},{column_name: last, validation_class: UTF8Type},{column_name: age, validation_class: UTF8Type,index_type: KEYS}];  

INSERT :  
- assume User keys as utf8;   
- set User\['ying']\['first'] = 'Eylul';  
- set User\['ying']\['last'] = 'AKBAS';  
- set User\['ying']\['age'] = '23';  

DESCRIBE :describe;  

GET : get User\['ying'];  

 

