const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN

export function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
}
