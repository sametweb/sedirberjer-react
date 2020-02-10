import React from "react";

const AboutPage = () => {
  return (
    <section className="welcome about-us">
      <h2>Firmamızı tanıyın.</h2>
      <p>
        Sedir & Berjer olarak, 1992 yılından bu yana mobilya sektöründe farklı
        kategorilerde hizmet vermekteyiz. Başlangıçta çoğunlukla ev mobilyası
        üretimine ağırlık vermişken, yaklaşık son 5 yıldır cafe ve restoran gibi
        mekanlar için toptan çözümler üretmekteyiz.
      </p>
      <p>
        Bugüne kadar Türkiye'nin dört bir yanındaki ve yurtdışında İngiltere,
        Fransa, Almanya, Hollanda, Avusturya, Rusya, ve Kanada olmak üzere üç
        farklı kıtadan müşterilerimize çözümler sunduk.
      </p>
      <h3>Vizyonumuz</h3>
      <p>
        Firmamızın orta ve uzun vadedeki amacı dünyanın dört bir yanına
        ürünlerimizi sunmaktır. 3-5 yıllık orta vadeli planlarımız arasında
        Avrupa ülkelerinde fuarlara katılıp ürünlerimizi tüm dünyanın tanımasını
        sağlamak bulunmaktadır.
      </p>
      <h3>Misyonumuz</h3>
      <ul>
        <li>Her konsepte uygun çözümler sunmak,</li>
        <li>Müşteri odaklı tasarım anlayışıyla hareket etmek,</li>
        <li>Her bir üründe en yüksek malzeme ve işçilik sağlamak,</li>
        <li>Üretimden teslimat sonrasına tam saydamlık sunmak.</li>
      </ul>
      <p>
        Bizimle iletişime geçmek için hemen arayabilir ya da WhatsApp üzerinden
        mesaj gönderebilirsiniz.
      </p>
      <p className="phone">
        <a href="tel:90-212-611-2790" target="_blank" rel="noopener noreferrer">
          <span>
            <i className="fa fa-phone"></i>(0212) 611 27 90
          </span>
        </a>
        <a
          href="https://wa.me/905522373237"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fa fa-whatsapp"></i>(0552) 237 32 37{" "}
          </span>
        </a>
      </p>
    </section>
  );
};

export default AboutPage;
