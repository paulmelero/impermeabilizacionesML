export type Service = {
  title: string
  short_text: string
  slug: string
  thumbnail: string
  long_text?: string
}

export type EcoService = Omit<Service, 'thumbnail'> & {
  thumbnail1: string
  thumbnail2: string
  eco?: boolean
}

export type Work = {
  date: string
  title: string
  place: string
  thumbnail: string
  service: string
  seoDescription: string
}
