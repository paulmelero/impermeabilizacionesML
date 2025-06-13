import { slugify } from './slugify'

const CONTENT_BASE = 'content'

type ContentItem = {
  [key: string]: any
  slug: string
}

// Generic content loader
function loadContent<T extends ContentItem>(
  globPath: string,
  routePrefix?: string
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
export const getServices = () => loadContent('static/services', 'servicios')
export const getMoreServices = () => loadContent('static/more_services')
export const getEcoServices = () => loadContent('static/eco_services')
export const getWorks = () => loadContent('blog/posts')

// For route generation
export async function getContentRoutes() {
  const [services, works] = [getServices(), getWorks()]

  const serviceRoutes = services.map((item) => `/servicios/${item.slug}`)
  const workRoutes = works.map((item) => `/trabajos/${item.slug}`)

  // Get unique places for dynamic routes
  const places = [...new Set(works.map((item) => item.place))]
  const placeRoutes = places.map(
    (place) => `/impermeabilizaciones/${slugify(place)}`
  )

  return [...serviceRoutes, ...workRoutes, ...placeRoutes]
}
