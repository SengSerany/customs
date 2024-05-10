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
      "Le produit a non seulement répondu à mes attentes, mais les a même dépassées. Je suis devenu une cliente fidèle!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
