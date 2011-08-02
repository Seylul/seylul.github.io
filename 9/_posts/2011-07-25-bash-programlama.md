---
layout: post
title: bash programlama
---
Bu anlatım benim gibi ilk başlayanlar için, _hello world_ aşaması yani :)  

	$vi scriptadi.sh
diyerek editörümüzü açalım. Her programın belli kuralları vardır ilk aşamadaki
önemli kural yazacağımız dosyanın başlama cümlesinin şu şekilde olmasıdır.  

	#!/bin/bash
Bu satırın adı shebang satırıdır. Programımızı konsoldan çalıştıracağımız için
bash dosyanın ilk satırına bakar ve bu satır sayesinde onun bash programı olduğunu anlayıp
çalıştırır.Alt satıra;  

	echo "Hello world"   
	//ekrana bir çıktı vermek istediğimizde _echo_ komutunu kullanırız.
yazıp kaydederek çıkalım ve konsola

	bash scriptadi.sh
yazıp ekran çıktısını **Hello world** şeklinde görelim.


