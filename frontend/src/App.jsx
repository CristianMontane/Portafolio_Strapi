import { useState, useEffect } from 'react'
import './App.css'
import { getHomeInfo } from './lib/get-home-info'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

function App() {
  const [homeInfo, setHomeInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getHomeInfo()
      .then(data => {
        setHomeInfo(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      {homeInfo && (
        <main>
          <h1>{homeInfo.title}</h1>
          <img src={homeInfo.photoUrl} alt='Profile photo' />
          <BlocksRenderer content={homeInfo.description} />
        </main>
      )}
    </>
  )
}

export default App
