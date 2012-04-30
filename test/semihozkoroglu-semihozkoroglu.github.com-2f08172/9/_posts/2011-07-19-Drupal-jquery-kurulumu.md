---
layout: post
title: Drupal sistemine jquery-ui paketini ekleme
---

Bu paket birçok eklenti tarafından kullanıldıgını belirtmek istiyorum. Kurulumun nasıl yapılacagını paket içindeki `Readme` dosyasında da 
görebilirsiniz.

Öncelikle jquery_ui paketinin kütüphanesini http://code.google.com/p/jquery-ui/downloads/list?q=1.6 adresten sürümünüz hangisiyse indirin
ben 1.6 kurulumunu anlatacağım.

İndirme işleminden sonra jquery_ui modules dosyalarının arasına çıkarın ve sites/all altında modules isimli klasör oluşturup bir kopyasınıda oraya koyun
kurulum esnasında buraya yönlendiriliyor. Siz o yüzden bir kopyasını koyun çünkü diğer türlü modul olarak görünmüyor.

jquery.ui kütüphanesinide yukarıda verdiğim adresten indirdikten sonra sites/all altında libraries klasörü oluşturup içine adı jquery.ui olacak şekilde
çıkartın bu aşamadan sonra eklentiler bölümünde kullanılabilir hale gelecektir.
