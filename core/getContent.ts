import {glob} from 'fs'
import { slugify } from './slugify'


const mapFilePathToRoute = (string, path, route) => {
  return (
    String(string)
      // .replace('./content/static/services', 'servicios')
      .replace(path, route)
      .replace(/\.json$/, '')
  )
}

// FS way: used only in the Nuxt config, to generate pages
// ****************************************************************************************
export const getServicesStatic = () =>
  [...glob('./content/static/services/**')]
    .filter(
      (f) =>
        String(f).includes('.json') && !String(f).includes('page_texts.json')
    )
    .map((f) => mapFilePathToRoute(f, './content/static/services', 'servicios'))

const getFieldCollection = (globSource, key) => {
  const files = [...glob(globSource)]
    .filter((f) => String(f).endsWith('.json'))

  const collection = new Set()

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const data = require('.' + file)
    const place = data[key]
    collection.add(place)
  }
  return Array.from(collection)
}
const getPlaces = () => getFieldCollection('./content/blog/posts/**', 'place')

export const getPlacesStatic = () => {
  return getPlaces().map((p) => `/impermeabilizaciones/${slugify(p)}`)
}
