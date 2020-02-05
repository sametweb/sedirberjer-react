import React from "react";

const Welcome = () => {
  return (
    <section className="welcome home">
      <h2>Hoşgeldiniz.</h2>
      <p>
        Sedir & Berjer, cafe ve restoran başta olmak üzere her türlü mekan için
        mobilya tasarım ve üretimi yapmaktadır.
      </p>
      <p>
        Katalogtan model seçebilir veya kendinize özel tasarım
        yaptırabilirsiniz. Detayları konuşmak için hemen arayın ya da
        WhatsApp'dan iletişime geçin.
      </p>
      <p className="phone">
        <a href="tel:90-212-611-2790" rel="noopener noreferrer" target="_blank">
          <span>
            <i className="fa fa-phone"></i>(0212) 611 27 90
          </span>
        </a>
        <a
          href="https://wa.me/905522373237"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            <i className="fa fa-whatsapp"></i>(0552) 237 32 37{" "}
          </span>
        </a>
      </p>
    </section>
  );
};

export default Welcome;
