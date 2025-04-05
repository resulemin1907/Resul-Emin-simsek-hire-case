Ebebek Ürün Carousel'i JavaScript Uygulaması

Bu proje, Ebebek web sitesinin ana sayfasında bulunan ürün carousel yapısının JavaScript kullanılarak, herhangi bir ek kütüphane (Swiper, Bootstrap vb.) kullanılmadan yeniden oluşturulması üzerine hazırlanmıştır. Orijinal tasarımın ve işlevselliğin mümkün olduğunca aynısını yapmaya çalıştım.

Proje Hakkında

Ebebek ana sayfasında görülen ürün carousel'i temel alınarak, birebir aynı yapı oluşturulmaya çalışıldı.

Mobil görünümde bazı küçük sıkıntılar yaşanmıştır; carousel mobilde görünmekte fakat tam olarak orijinal sayfadaki gibi çalışmamaktadır.

Proje herhangi bir harici JavaScript veya CSS kütüphanesi kullanılmadan, tamamen Vanilla JavaScript ile yazılmıştır.

Nasıl Kullanılır?

Bu JavaScript kodunu Ebebek web sitesinin ana sayfasında, Chrome tarayıcısının Developer Tools konsoluna doğrudan kopyalayıp yapıştırarak çalıştırabilirsiniz.

Kod yalnızca ana sayfada çalışacak şekilde tasarlanmıştır; farklı bir sayfada çalıştırılmaya çalışıldığında konsola "wrong page" uyarısı verir ve aktif olmaz.

Projenin Detayları

Ürün verileri JSON üzerinden fetch ile çekilip yerel depolamada (local storage) saklanmaktadır.

Kullanıcı favori ürünlerini kalp ikonuna tıklayarak belirleyebilir, bu tercihler yerel depolamada saklanarak sonraki ziyaretlerde otomatik gösterilir.

Fiyat ve indirim hesaplamaları doğru ve açıkça gösterilir.

Bilinen Sorunlar

Carousel yapısı mobil görünümde tam anlamıyla orijinal tasarım ile uyumlu değildir. Bu konu üzerinde geliştirme yapılabilir.

Sayfa dışı kullanımlarda çalışmaması planlı ve bilinçli bir tercihtir.

Geliştirici Notları

Bu çalışma işe alım case çalışması için özel olarak oluşturulmuştur.

Kodun daha iyi hale getirilebilmesi adına mobil optimizasyonların ve performans iyileştirmelerinin ileride yapılması planlanmaktadır.

Lisans

Bu proje açık kaynak kodludur. Kişisel geliştirme ve öğrenme amacıyla serbestçe kullanılabilir.
