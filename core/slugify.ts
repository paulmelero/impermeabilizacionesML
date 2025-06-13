export const slugify = (text) => {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[\u0300-\u036F]/g, '') // Remove diacritics
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}
