---
layout: post
title: Rails-1
---

Rails'in default ayarları sayesinde xml bir dosyayı düzenlemek ve çalıştırmak için fazla zaman harcamayız.
Railsde modeller, controller, view , images, style sheets, Javascript ve ayar dosyaları olmak üzere herşeyin yeri bellidir.

Rails MVC mimarisi ruby tarafından derlerdiğin için esnek ve hızlıdır.Genel olarak mimariden bahsedecek olursak

- Model : Database'e yazılacak olan veriyi belli kurallara tabi tutulmasıdır örnek olarak doldurulması gereken alanlardan istediğimizi zorunlu kılabilmemize olanak sağlamaktadır.

- Controller : Aldığı komutu çalıştırır ve dönüş değerini view'e geçer. Controller de bulunan methodlara gelen get , post gibi istekleri yönlendirmeden sorumludur.

- View : Verinin gösterilmesinden sorumludur. View complex mantık işlemlerinin içermemelidir. View contoller actionlarından gelen verilerin gösterilmesiden sorumludur.Controller ve View yapısı birbirine bağlı yapılardır.

rails mimarisinde veritabanındaki tabloların alanları sınıfların özelliğiymiş gibi atanıp active record sayesinde de veri üzerinde arama kaydetme gibi methodları kullanabiliriz.

kurulumu
	
        gem install rails

güncelleme
	
	gem update rails

veritabanı olarak mysql haricindeki veritabanı yöneticelerinde veritabanı sürücülerinin kurulması gerekmektedir.

Bütün kurulumlarmız tamamlandı ise eksik bileşenimizin olup olmadıgını `bundle install` komutu ile kontrol edebiliriz.Eğer mysql veritabanı kullanacak
iseniz sqlite3 eksikliğini göz ardı edebilirsiniz.

	rails new my-blog

diyerek blog uygulamamızı yarattıgımız zaman `config/database.yml` dosyamız default olarak sqlite3 'bağlı olarak gelecektir.

	rails new my-blog -d mysql

dediğimizde ise `-d` parametresinden sonra kullanacağımız veritabanımızı ismini girebiliriz.

	cd my-blog

uygulamamızın içinde `config/database.yml` dosyamızı düzenledikten sonra `rails server` diyerek rails ile gelen webrick'i başlatabiliriz bunun için projemizi oluşturduğumuz yerin önemi yoktur.
ve default olarak localhost'un 3000 portunda çalışmaktadır.Eğer istersen `-p` parametresi ile `rails server -p 27000` gibi istediğimiz ancak kullanılmayan portlar üzerinde çalıştırabiliriz.
tarayıcımızda `localhost:3000` adresine giderek çalıştıgından emin olabiliriz.



 
