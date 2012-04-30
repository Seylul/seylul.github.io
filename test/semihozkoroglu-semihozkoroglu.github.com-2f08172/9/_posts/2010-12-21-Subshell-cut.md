---
layout: post
title: Subshell ve Cut komutu
---

#### Subshell

Subshell xterm emilatöründeyken yeni bir bash prosesinin forklanmasıdır.yani:
	
	budizin=$( pwd ; echo "hımm" )
	echo $budizin

dediğimizde `$( pwd ; echo "hımm" )` ifadesinde bir çocuk prosesi üretilir ve komut burada yorumlanır.ancak

	budizin=$( pwd ; var="hımm" )
	echo $budizin

dediğimizde anaprosese döndüğünde `$budizin` ifadesini yazdırdığında `var="hıımm"` değişkenini göremez çünkü
subshell'de yaratılan değişkenler local olarak oluşturulmaktadır.
Bu durumun ne gibi kullanımı vardır ?
örnek : `echo "sistem adi : $( uname -n ) 'dir ."`  dediğimizde subshell'e girip sistem adını basıp çıkıcaktır.


export komutuyla anaprosesten subshell'e değişiken gönderebilriz.
	
	export var="merhaba"
	bash #subshell'e giriyoruz.
	echo $var 

yada

	var="merhaba"
	export var
	bash
	echo $var

dediğimizde subshell gönderdiğimiz var değişkenini görmektedir.Ancak
Subshell'deyken export yapamayız ana prosesteyken export yapabiliriz buda subshell'in variable listesine ekleme yapar.

Yada `var="merhaba" bash ` diyerek export etmeden direk değişkeni gönderebiliriz ancak bu durumda ana proses tarafından bu değişken tanımlı olmucaktır.

####Shell değişken değiştirme

Burada değişkenimizin karekterleri üzerinde oynamalar yapabilicez.Örnek :

	var=/foo/bar/baz

	echo "${ var##*/ }"

Dediğimizde değişkenimizin başından itibaren tarayarak ilerle ve gidebileceğin en son yerdeki `/` karekterinden sonrasını döndür anlamındadır.
çıktısı >> baz

	echo "${var#*/}"

Bu durumda ise değişkenin başından itibaren tarayarak ilerle ve gidebileceğin en az mesafedeki `/` karakterinden sonrasını döndür.
çıktısı >> foo/bar/baz 

	echo "${var%/*}"

Burada ise değişkenin sonundan itibaren tarayarak ilerle ve gidebileceğin en az mesafedeki `/` karakterinden sonrasını döndür.
çıktı >> /foo/bar

	echo "${var%%/*}"

Dediğimizde değişkenimizin sonundan itibaren tarayarak ilerle ve gidebileceğin en son yerdeki `/` karekterinden sonrasını döndür anlamındadır.
çıktı >> "boş"

Anlaşılacağı üzere taradıgı alan haricini döndürmektedir ve de `#` ile `%` karakterleri en az mesafeyi `##` ile `##` karakterleride en fazla mesafeyi ifade etmektedir.



#### Cut komutu

Cut komutu default olarak tab'a göre ayarlanmıştır. `cut  -f2` komutu'na gelen girdide tab karekteri varsa tab'a göre ayraçlık yapar ve ikinci kısmını geri döner.
Eğer tab karekteri yoksa metnin kendisini döndürür.

`cut -d ' : ' -f3 ` ifadesindeki `-d` paremetresi ayraç vereceğimizi bildirmektedir ve tırnaklar içinde verilen `:`  karakterine göre ayıracağını ve 3. parçasını döndürmektedir.
Bunu:
	cut -d ' ' -f2-4
olacak şekildede yazabiliriz.`-f2-4` ifadesi parçalardan 2 ve 4 dahil olmak üzere o aralığı döndürmektedir.

	line="a:b:c:d"
	karakter=$( echo $line | cut -d ':' -f3 )
	echo $karakter 
Dediğimizde `c` 'yi döndürecektir.

Bu şekilde girdiyi istediğimiz karaktere göre ayırabiliriz.Awk programıyla'da benzer işi yapabiliriz ve awk programı daha kapsamlı olmasına rağmen cut komutu ile neredeyse 
eşdeğer çalışmaktadır.Awk programının kullanımını daha sonradan bahsedicem ancak basit olarak 

	echo "a ? b ? c ? d:e " | awk -F ? ' { print $4 } '
çıktı -> d:e

Dediğimizde `-F` paremetresi alan ayıraçı anlamında yani default olarak değilde verdiğimiz `?` karekterine göre ayırmamızı sağlamaktadır.
`'{print $4}'` ifadesindeki `$4` parçalamadan sonraki 4. parçamızı ifade etmektedir.

Bu şekil cut ve awk programlarını kullanarak işlemimizi gerçekleştirebiliriz ancak bunun için shell'in kendi imkanlarını kullanmak daha mantıklı olacaktır.
Her seferinde cut ve awk'nın forklanması için ayrı bir sürede harcamamış olucaz.Bunu şu şekilde gösterebiliriz.

	#!/bin/bash

        ifs_save=$IFS
        IFS=:
        while read line ; do
                set $line
                echo "kabuk : $7"
        done < /etc/passwd

Burada doğrudan shell'in kendi imkanlarını kullandık ve passwd dosyasının kullanıcıların kullandıkları kabuk programları listelemiş olduk.


