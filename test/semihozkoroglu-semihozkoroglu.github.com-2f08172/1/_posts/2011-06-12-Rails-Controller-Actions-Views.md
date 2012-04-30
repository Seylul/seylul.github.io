---
layout: post
title: Rails-2
---

İlk olarak projemizin isminde veritabanı oluşturmalıyız. Projenizin içindeyken

	rake db:create

komutunu çalıştırarak veritabanında `<proje-adi>_development ve <proje-adi>_test` adında iki tane database'in oluşturuldugunu görebilirsiniz.

Bu noktadan sonra `public/index.html` default sayfamızı silemiz gerekmektedir.

	rails generate controller home

komutunu çalıştırdığımızda 

	create  app/controllers/home_controller.rb
	invoke  erb
	create    app/views/home
	invoke  test_unit
	create    test/functional/home_controller_test.rb
	invoke  helper
	create    app/helpers/home_helper.rb
	invoke    test_unit
	create      test/unit/helpers/home_helper_test.rb

çıktısındada görüldüğü gibi `app/` altında `controller` ve `views` alanlarında `home` isimlerini içeren çeşitli dosyalarımız oluşturuldu şimdilik
biz controller ve view alanları ile ilgileneceğiz. home bölümünü anasayafa yapacağımız göz önunde bulundurarak içinde `index.html.erb` dosyamızı oluşturabiliriz.
erb uzantısı ruby kodları içereceği anlamındadır. Eğer bu index sayfamızı kendimiz oluşturur isek `config/routes.rb` dosyamızın içeriğine `get "home/index"`
kodunu yerleştirmeliyiz ve home'un control dosyasının içerisine index methodu( def index ) eklemeliyiz bu method home/index çağırıldıgında çalışacak olan methoddur yada

	rails generate controller home index

komutu ile `routes.rb` , `home_controller.rb` içeriğine index'e bağlı komutlarımızı otomatik olarak eklenip `app/views/home/index.html.erb` dosyasıda bizim
için otomatik olarak oluşturulacaktır.

Controller ile View arasındaki bağlantıyı azda olsa anlayabilmek için `app/controller/home_controller.rb` dosyamızın içerisindeki `index` methodunda
`@deneme = "Hello Rails"` deneme adında oluşturdugumuz sınıf değişkenimize atadıgımız stringi `/home/index` içinde göstermek istersek eğer.

`app/views/home/index.html.erb` içeriğinde `<%` `%>` ruby kodlarının yazılacağı ayraçların arasına `<%= @deneme %>` yazıp `localhost:3000/home/index` 'de ekranda Hello Rails yazdıgını 
görebiliriz.

Eğer Hello Rails yazımızın 5 defa gösterilmesi istersek, `index.html.erb` dosyamızın içeriğini:
	
	<html>
		<head>
		</head>
		<body>
			<%
				5.times do
			%>
			<h1> <% @deneme %></h1>
			<%
				end
			%>
		</body>
	</html>

olarak değiştirebiliriz.

peki biz `home` altında başka bir html dosyası yaratmak istediğimizde bu html'ler için kullanılcak methodları nereden çağırmalıyız. İndex'ten mi? ..Hayır

Rails 'in basit ama mantıklı bir yapısı var bu noktada `home` altında oluşturulacak her html dosyası için `controller/home_controller.rb` içinde method yaratmalıyız.
Yani diyelimki kullanıcı index sayfamızda çıkış linkine tıkladıgında `exit.html.erb` 'yi çağırmasını ve buna bağlı olarak ekranda çıkarken görmesini istediğimiz metni bastırmak istediğimizde
ilk olarak `home/exit.html.erb` dosyasını oluşturduktan sonra `home_controller.rb` dosyasında 

	def exit
		@cikis = "gule gule"
	end

eklemesini yapıp , exit.html.erb'yi

	<html>
		<head>
		</head>
		<body>
			<%=	@cikis %>
		</body>
	</html>

index.html.erb 'içinden `link_to` fonksiyonunu kullanarak link verirsek eğer:

	<%= link_to "Cıkış yapınız." , :action => "exit" %> 

ifadesinde görüldüğü gibi exit sayfası çağrılıyor ve bu sayfa çağırıldıgında controller kısmındaki değişkenlere hakim olunabilir. İlerleyen konularda
sayfa çağırılırken değer gönderme konularınıda yazmaya çalışacağım.

Ve bu aşamada sunucumuzu çalıştırdığımız zaman yönlerdirme hatası alacağız
nedeni ise `config/routes.rb` içinde `get home/exit` satırını eklemediğimiz
için.

