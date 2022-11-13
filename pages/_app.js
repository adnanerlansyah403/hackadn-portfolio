import '../styles/index.css'
import '../styles/require.css'
import '../styles/project.css'
import '../styles/about.css'
import '../styles/contact.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {

  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
