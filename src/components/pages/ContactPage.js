import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="welcome about-us">
        <h2>Bize ulaşın.</h2>
        <p>
          Telefon ve WhatsApp aracılığıyla iletişime geçebilir ya da iletişim
          formunu kullanarak bize yazabilirsiniz.
        </p>
        <p className="phone">
          <a
            href="tel:90-212-611-2790"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      <section className="contact-area">
        <form id="contact" action="https://formspree.io/mbjjkbqk" method="POST">
          <div id="form-messages"></div>
          <label htmlFor="name">
            Adınız Soyadınız: <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            E-Mail Adresiniz: <input type="text" name="_replyto" id="email" />
          </label>
          <label htmlFor="message">
            Mesajınız:
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <button id="submit">Gönder</button>
        </form>
        <div className="map">
          <iframe
            title="sedir & berjer on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.3658926072458!2d28.881972915769325!3d41.03912697929772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba9542cc4723%3A0xa4df71e4e0257c0b!2sCafe%20Sedir%20Berjer!5e0!3m2!1sen!2sus!4v1573028679317!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
