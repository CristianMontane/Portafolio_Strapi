import { query } from './strapi'

export async function getHomeInfo() {
  return query('home?populate=photo').then((res) => {
    return res.data
  })
}
