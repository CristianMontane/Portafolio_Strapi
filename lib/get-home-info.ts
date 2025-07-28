import { query } from './strapi'
export async function getHomeInfo() {
  try {
    const response = await query('home')
    return {
      title: response.data.title,
      description: response.data.description,
      id: response.data.id,
      documentId: response.data.documentId,
      createdAt: response.data.createdAt,
      updatedAt: response.data.updatedAt,
      publishedAt: response.data.publishedAt
    }
  } catch (error) {
    console.error('Error fetching home info:', error)
    throw error
  }
}
