import { createContext } from "react";

//prettier-ignore
export const data = [
    { title: 'Forno Antico', description: ``, location: 'Graz, Avusturya', path: `img/referanslar/avusturya-restoran-2.jpeg`, otherImages: [] },
    { title: 'Forno Antico', description: ``, location: 'Graz, Avusturya', path: `img/referanslar/avusturya-restoran.jpeg`, otherImages: [] },
    { title: 'Forno Antico', description: ``, location: 'Graz, Avusturya', path: `img/referanslar/yesil-sedir.jpeg`, otherImages: [] },
    { title: 'Bossuite Hotel Maltepe', description: 'Otelin girişindeki cafe bölümünde C sedir, tekli berjer ve cafe masası ürünleri.', location: 'Maltepe, İstanbul', path: `img/referanslar/black-c.jpeg`, otherImages: [] },
    { title: 'Bossuite Hotel Maltepe', description: 'Otelin girişindeki cafe bölümünde C sedir, tekli berjer ve cafe masası ürünleri.', location: 'Maltepe, İstanbul', path: `img/referanslar/burgundy-sedir.jpeg`, otherImages: [] },
    { title: 'Sultahahmetli', description: `Başakşehir'in nadide mekanlarından Sultanahmetli'de chester koltuk, cafe masaları ve okey masaları tarafımızdan üretilmiştir.`, location: 'Başakşehir, İstanbul', path: `img/referanslar/cafe-chester-koltuk.jpeg`, otherImages: [] },
    { title: 'Sultahahmetli', description: `Başakşehir'in nadide mekanlarından Sultanahmetli'de chester koltuk, cafe masaları ve okey masaları tarafımızdan üretilmiştir.`, location: 'Başakşehir, İstanbul', path: `img/referanslar/cafe-chester.jpeg`, otherImages: [] },
    { title: 'DoQka Restaurant & Hookah Lounge', description: '', location: 'Sarıyer, İstanbul', path: `img/referanslar/cafe-sandalye-sedir.jpeg`, otherImages: [] },
    { title: 'Antik Teras Cafe', description: '', location: 'Yakuplu, İstanbul', path: `img/referanslar/demir-sedir-masa.jpeg`, otherImages: [] },
    { title: 'Köfteci Ramiz', description: '', location: 'Metroport AVM Bahçelievler, İstanbul', path: `img/referanslar/kofteci-ramiz.jpeg`, otherImages: [] },
    { title: 'Köfteci Ramiz', description: '', location: 'Metroport AVM Bahçelievler, İstanbul', path: `img/referanslar/sedir-sandalye-masa.jpeg`, otherImages: [] },
    { title: 'Sultahahmetli', description: `Başakşehir'in nadide mekanlarından Sultanahmetli'de chester koltuk, cafe masaları ve okey masaları tarafımızdan üretilmiştir.`, location: 'Başakşehir, İstanbul', path: `img/referanslar/tahta-masa.jpeg`, otherImages: [] },
    { title: 'Akgün Otel Teras Cafe', description: '', location: 'Fatih, İstanbul', path: 'img/referanslar/akgun-otel-teras-cafe-fatih-istanbul.jpeg', otherImages: [] },
    { title: 'Akgün Otel Teras Cafe', description: '', location: 'Fatih, İstanbul', path: 'img/referanslar/akgun-otel-teras-cafe.jpeg', otherImages: [] },
    { title: 'David People İsfanbul AVM', description: '', location: 'Eyüp, İstanbul', path: 'img/referanslar/david-people-isfanbul-avm-eyup-istanbul.jpeg', otherImages: [] },
    { title: 'HopSack Game', description: '', location: 'Tekirdağ', path: 'img/referanslar/HopSack-game-tekirdag.jpeg', otherImages: [] },
    { title: 'Kafes Kafe', description: '', location: 'Haliç, İstanbul', path: 'img/referanslar/kafes-kafe-halic-istanbul.jpeg', otherImages: [] },
    { title: 'Son Ağa Nargile Cafe', description: '', location: 'Esenler, İstanbul', path: 'img/referanslar/son-aga-nargile-cafe-esenler-istanbul.jpeg', otherImages: [] },
    { title: 'Zoom Bahçe', description: '', location: 'Mecidiyeköy, İstanbul', path: 'img/referanslar/zoom-bahce-mecidiyekoy-istanbul.jpeg', otherImages: [] },
    { title: '[Restoran]', description: '', location: 'Tekirdağ', path: `img/referanslar/isimsiz-tekirdag.jpeg`, otherImages: [] },
    { title: '[Restoran]', description: '', location: 'Tekirdağ', path: `img/referanslar/isimsiz-tekirdag-2.jpeg`, otherImages: [] },
    { title: '', description: '', location: '', path: `img/referanslar/okey-masasi.jpeg`, otherImages: [] }
  ];

export const ReferencesContext = createContext();
