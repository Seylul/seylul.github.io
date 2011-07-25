---
layout: post
title: bash programlama
---
Bu anlatım benim gibi ilk başlayanlar için, "hello word" aşaması yani :)  

	$vi scriptadi.sh
diyerek editörümüzü açalım. Her programın belli kuralları vardır ilk aşamadaki
önemli kural yazacağımız dosyanın başlama cümlesinin şu şekilde olmasıdır.  

	#!/bin/bash
nasıl ki PHP'de  *<?* bu şekilde başlıyoruz,aynı şekilde bu da öyle..  Alt
satıra  

	echo "Hello world"   
	//ekrana bir çıktı vermek istediğimizde _echo_ komutunu kullanırız.
yazıp kaydederek çıkalım ve konsola

	bash scriptadi.sh
yazıp ekran çıktısını *Hello world* şeklinde görelim.


