import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#about-us", label: "À propos" },
  { href: "#products", label: "Produits" },
  { href: "#contact-us", label: "Contact" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Commandes" },
  { value: "50+", label: "Variations" },
  { value: "900+", label: "Clients" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Air Force Banksy",
    price: "199.99€",
    rate: "4.3",
  },
  {
    imgURL: shoe5,
    name: "Air Force Itachi",
    price: "210.99€",
    rate: "4.4",
  },
  {
    imgURL: shoe6,
    name: "Air Force Hokusaï",
    price: "259.99€",
    rate: "4.4",
  },
  {
    imgURL: shoe7,
    name: "Air Force Cerisier",
    price: "210.99€",
    rate: "4.5",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Livraison offerte",
    subtext:
      "Profitez d'un shopping en toute simplicité couronné de la livraison gratuite.",
  },
  {
    imgURL: shieldTick,
    label: "Payement sécurisé",
    subtext:
      "Effectuez vos transactions en toute sérénité grâce à nos options de paiement sécurisées.",
  },
  {
    imgURL: support,
    label: "Besoin d'aide ?",
    subtext:
      "Notre équipe dévouée est à votre disposition pour vous accompagner à chaque étape",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Eliott Lévy",
    rating: 4.6,
    feedback:
      "L'attention portée aux détails et la qualité du produit ont dépassé mes attentes. Je recommande!",
  },
  {
    imgURL: customer2,
    customerName: "Inès Benali",
    rating: 4.8,
    feedback:
      "J'ai pu proposée le design que je voulais et ils l'ont sublimé. Je suis devenu une cliente fidèle!",
  },
];

export const footerLinks = [
  {
    title: "Produits",
    links: [
      { name: "Air Force Banksy", link: "/" },
      { name: "Air Force Itachi", link: "/" },
      { name: "Air Force Hokusaï", link: "/" },
      { name: "Air Force Cerisier", link: "/" },
      { name: "Plus...", link: "/" },
    ],
  },
  {
    title: "Aide",
    links: [
      { name: "À propos", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Informations légales", link: "/" },
      { name: "Protection des données", link: "/" },
      { name: "Politique de paiement", link: "/" },
    ],
  },
  {
    title: "Gardons contact !",
    links: [
      { name: "customer@customs.com", link: "mailto:customer@customs.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
