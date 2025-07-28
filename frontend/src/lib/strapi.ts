const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN

export function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
  .then((res) => {
    // Process images automatically
    if (res.data) {
      processImages(res.data)
    }
    return res
  })

  function processImages(data: any) {
    if (!data) return
    
    // Handle single objects
    if (data.photo && typeof data.photo === 'object') {
      data.photoUrls = {
        original: getImageUrl(data.photo),
        thumbnail: data.photo.formats?.thumbnail ? getImageUrl(data.photo.formats.thumbnail) : getImageUrl(data.photo),
        small: data.photo.formats?.small ? getImageUrl(data.photo.formats.small) : getImageUrl(data.photo),
        medium: data.photo.formats?.medium ? getImageUrl(data.photo.formats.medium) : getImageUrl(data.photo),
        large: data.photo.formats?.large ? getImageUrl(data.photo.formats.large) : getImageUrl(data.photo)
      }
    }
    
    // Handle arrays (for collections)
    if (Array.isArray(data)) {
      data.forEach(item => processImages(item))
    }
  }

  function getImageUrl(imageData: { url?: string; formats?: { [key: string]: { url?: string } } }): string {
    if (!imageData || !imageData.url) {
      return ''
    }
    
    // If the URL is already absolute, return it as is
    if (imageData.url.startsWith('http')) {
      return imageData.url
    }
    
    // Otherwise, prepend the Strapi host
    return `${STRAPI_HOST}${imageData.url}`
  }
}
