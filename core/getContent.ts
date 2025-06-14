import type { Service, Work } from '~/types'
import { slugify } from './slugify'

const CONTENT_BASE = 'content'

type ContentItem<T> = T & {
  slug: string
}

// Generic content loader for Vite build
function loadContent<T extends ContentItem<unknown>>(
  globPath: string,
  routePrefix?: string,
): T[] {
  const modules = import.meta.glob('/content/**/*.json', { eager: true })

  const items = Object.entries(modules)
    .filter(([file]: [string, unknown]) => !file.includes('page_texts.json'))
    .map(([file, content]: [string, unknown]) => {
      const parsedContent = JSON.parse(content as string)
      const slug = file
        .replace(new RegExp(`^${CONTENT_BASE}/${globPath}/`), '')
        .replace(/\.json$/, '')

      return {
        ...parsedContent,
        slug: routePrefix ? `${routePrefix}/${slug}` : slug,
      }
    })

  return items
}

// Specific content loaders
export const getServices = () =>
  loadContent<ContentItem<Service>>('static/services', 'servicios')
export const getMoreServices = () =>
  loadContent<ContentItem<Service>>('static/more_services')
export const getEcoServices = () =>
  loadContent<ContentItem<Service>>('static/eco_services')
export const getWorks = () => loadContent<ContentItem<Work>>('blog/posts')

// For route generation
export async function getContentRoutes() {
  const [services, works] = [getServices(), getWorks()]

  const serviceRoutes = services.map((item) => `/servicios/${item.slug}`)
  const workRoutes = works.map((item) => `/trabajos/${item.slug}`)

  // Get unique places for dynamic routes
  const places = [...new Set(works.map((item) => item.place))]
  const placeRoutes = places.map(
    (place) => `/impermeabilizaciones/${slugify(place)}`,
  )

  return [...serviceRoutes, ...workRoutes, ...placeRoutes]
}

// Content loader for runtime use

export async function getContent<T extends ContentItem<unknown>>(
  globPath: string,
  routePrefix?: string,
): Promise<T[]> {
  const items = import(globPath)

  // Simulate async behavior for consistency with other data fetching
  return new Promise((resolve) => {
    setTimeout(() => resolve(items), 100)
  })
}

export async function getContentByType(
  type: 'services' | 'more_services' | 'eco_services' | 'works',
): Promise<ContentItem<Service>[] | ContentItem<Work>[]> | never {
  switch (type) {
    case 'services':
      return getContent<ContentItem<Service>>('static/services')
    case 'more_services':
      return getContent<ContentItem<Service>>('static/more_services')
    case 'eco_services':
      return getContent<ContentItem<Service>>('static/eco_services')
    case 'works':
      return getContent<ContentItem<Work>>('blog/posts')
    default:
      throw new Error(`Unknown content type: ${type}`)
  }
}
