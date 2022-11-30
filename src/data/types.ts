export type NavbarLink = {
  label: string,
  destination: string,
  variant?: 'primary' | 'secondary',
}

export type Brand = {
  name: string,
  path: string
}

export type Card = {
  imageSrc: string,
  title: string,
  destination: string
}

export type MobCard = {
  imageSrc: string,
  title: string,
  subtitle: string
}