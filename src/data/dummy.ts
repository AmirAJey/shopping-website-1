import { Brand, Card, MobCard, NavbarLink } from "./types";

export const navbarLinks: NavbarLink[] = [
  {
    label: 'catalogue',
    destination: '#',
  },
  {
    label: 'fashion',
    destination: '#',
  },
  {
    label: 'favorite',
    destination: '#',
  },
  {
    label: 'lifestyle',
    destination: '#',
  },
  {
    label: 'sign up',
    destination: '#',
    variant: 'secondary',
  },
]

export const brands: Brand[] = [
  {
    name: 'Amazon',
    path: 'assets/brands/amazon.svg'
  },
  {
    name: 'HM',
    path: 'assets/brands/hm.svg'
  },
  {
    name: 'Android',
    path: 'assets/brands/android.svg'
  },
  {
    name: 'Host',
    path: 'assets/brands/host.svg'
  },
  {
    name: 'Obey',
    path: 'assets/brands/obey.svg'
  },
  {
    name: 'Shopify',
    path: 'assets/brands/shopify.svg'
  },
]

export const cards: Card[] = [
  {
    imageSrc: 'assets/cards/card1.png',
    title: 'Hoodies & Sweetshirt',
    destination: '#'
  },
  {
    imageSrc: 'assets/cards/card2.png',
    title: 'Coats & Parkas',
    destination: '#'
  },
  {
    imageSrc: 'assets/cards/card3.png',
    title: 'Tees & T-Shirt',
    destination: '#'
  },
]

export const youngFavorites: Card[] = [
  {
    imageSrc: 'assets/cards/card4.png',
    title: 'Trending on instagram',
    destination: '#'
  },
  {
    imageSrc: 'assets/cards/card5.png',
    title: 'All Under $40',
    destination: '#'
  },
]

export const mobDemoCards: MobCard[] = [
  {
    imageSrc: 'assets/mobDemo/mob-card1.png',
    title: 'Polkadot Red Dress',
    subtitle: 'Rs.  1,499.00'
  },
  {
    imageSrc: 'assets/mobDemo/mob-card2.png',
    title: 'Striped Pink Dress',
    subtitle: 'Rs.  1,299.00'
  },
  {
    imageSrc: 'assets/mobDemo/mob-card3.png',
    title: 'title',
    subtitle: 'subtitle'
  },
  {
    imageSrc: 'assets/mobDemo/mob-card4.png',
    title: 'title',
    subtitle: 'subtitle'
  },
]

export const downloadButtons = [
  {
    imageSrc: 'assets/icons/google-play.png',
    title: 'Google Play',
    subtitle: 'GET IT ON'
  },
  {
    imageSrc: 'assets/icons/apple.png',
    title: 'App Store',
    subtitle: 'Download on the'
  },
]

export const footerLinks = [
  {
    title: 'Company',
    link: [
      {label: 'About', destination: '#'},
      {label: 'Contact us', destination: '#'},
      {label: 'Support', destination: '#'},
      {label: 'Careers', destination: '#'},
    ]
  },
  {
    title: 'Quick Link',
    link: [
      {label: 'Share Location', destination: '#'},
      {label: 'Orders Tracking', destination: '#'},
      {label: 'Size Guide', destination: '#'},
      {label: 'FAQs', destination: '#'},
    ]
  },
  {
    title: 'Legal',
    link: [
      {label: 'Terms & conditions', destination: '#'},
      {label: 'Privacy Policy', destination: '#'},
    ]
  },
]