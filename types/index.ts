export interface Service {
  title: string
  short_text: string
  slug: string
  thumbnail: string
  long_text?: string
}

export interface EcoService {
  title: string
  short_text: string
  slug: string
  thumbnail1: string
  thumbnail2: string
  long_text?: string
  eco?: boolean
}

export interface Work {
  date: string
  title: string
  place: string
  thumbnail: string
  service: Service
  seoDescription: string
}
