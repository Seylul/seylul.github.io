---
layout: post
title: Docker Registry'a Nasıl Repository Upload Edilir?
---
 [Docker hub](https://hub.docker.com/)'a login olalım, [Repositories](https://cloud.docker.com/repository/list) sekmesinden Create Repository'i seçelim. Hub'a upload etmek istediğiniz imajın adını ve açıklamasını girelim. Repo ismindeki tüm karakterlerin küçük harf olmasını isteniyor, rakam, alt tire ve tire karakterlerini de kullanabilirsiniz.
 Diğer bir tarafta cli'dan docker login komutunu verelim.Bize kullanıcı adı ve şifemizi soruyor.Docker Hub'da kullandığımız kullanıcı adı ve şifresini yazıyoruz.

	#docker login https://index.docker.io/v1/ (docker login servername)
	 Username:
	 Password:
	 Login Succeeded 
 Login Succeeded yazısını görünce login oldun demektir.

	#docker push <IMAGE-NAME>

şeklinde komut gireceğiz. Burada repo ismini yanlış girersek; "An image doesn't exist locally with the tag" gibi bir uyarı verir.Bu yüzden ilk önce docker imajımıza bir tag girmemiz lazım,  

#### 1.

 Etiket yani tag girerken -t parametresini kullanacağız. Image name'de root namespace'sinizin yer alması şarttır. Mesela projeniz "plapi17" adı taşıyorsa ve DockerHub Namespace'siniz "seylul" ise ; Image name'iniz "seylul/plapi17" olmalıdır.

	#docker build . -t seylul/plapi17  

komutunu vererek yeni bir imaj oluşturalım
#### 2.
 
 Docker imagelarımızı listeleyelim ve oluşturduğumuz imajın etiketine dikkat edelim. Çıkan listede tag sütunu altında yazar.

	#docker images 

burada kendi imajımızın etiketini bir sonraki adımda kullanacağız.

#### 3.

Image name'de root namespace'sinizin yer alması şarttır.

	#docker push <IMAGE-NAME>:TAG 
	#docker push seylul/plapi17:latest 

şeklinde komutu girdiğimizde docker hub'a upload'un başladığını görürüz.

Eğer çıktısında aşağıdaki gibi "unauthorized" şeklinde bir hata alıyorsanız ve login olduğunuza eminseniz;

 ![Docker Push Error](https://github.com/Seylul/seylul.github.io/blob/master/images/dockerpush_error.PNG)

şeklinde bir hata alıyorsanız ve login olduğunuza eminseniz;

.docker/config.json dosyasının adını değiştirip tekrar docker login komutunu çalıştırabilirsiniz. Muhtemelen config dosyasının içeriğinde yanlış bir şeyler var.

	#find / -name config.json
	#mv xxx/.docker/config.json  xxx/.docker/config_old.json
	#cd xxx/plapi17
	#docker login https://index.docker.io/v1/
Aşağıdaki gibi çıktısı olmalıdır
	Login with your Docker ID to push and pull images from Docker Hub. 
	If you don't have a Docker ID, head over to https://hub.docker.com to create one.
	Username: seylul
	Password:
	WARNING! Your password will be stored unencrypted in /xxx/.docker/config.json.
	Configure a credential helper to remove this warning. 
	See https://docs.docker.com/engine/reference/commandline/login/#credentials-store
	Login Succeeded

Şimdi tekrar push edelim.

 docker push seylul/plapi17:latest

 
![Docker Push](https://github.com/Seylul/seylul.github.io/blob/master/images/dockerpush.PNG)
 
