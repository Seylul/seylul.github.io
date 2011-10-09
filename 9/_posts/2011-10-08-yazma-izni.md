---
layout: post
title: Insecure world writable
---
Konsola çeşitli komutlar yazdığımda;

	warning: Insecure world writable dir /var in PATH, mode 040777
uyarısını alıyordum.. /var dizini yolunda yazılabilir güvensiz dünya..?! 
 
Yapmak istediğim işlemi yine yapabiliyordum fakat komutu yazıp enter'a her bastığımda işlemi yapmadan önce bu uyarı çıkıyor mütakiben işlem gerçekleşiyordu. Biraz göz zevki bozuyor ve fazlılık yapıyordu nihayet ondan kurtulmanın yolunu buldum :)
	
	sudo chmod go-w /var
Basit bir izin sorunuymuş meğersem örnek için bu kod işimi gördü, kullanım formatı ise şu;

	chmod go-w filename 
Text dosyalarının okunabilir ama yazılamaz olduğunu söylüyor -w(write) ile. go ise grup(**g**roup) ve diğerleri(**o**ther)'ne bu iznin olduğunu belirtmek için kullanılmış.

