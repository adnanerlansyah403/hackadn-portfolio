import '../styles/index.css'
import '../styles/require.css'
import '../styles/project.css'
import '../styles/about.css'
import '../styles/contact.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    
    if(typeof window !== undefined) {
      const btnOpen = document.querySelector("[data-nav-open]");
      const btnClose = document.querySelector("[data-nav-close]");
      const navMobile = document.querySelector("[data-nav-mobile]");
      console.log(btnOpen)

      btnOpen.addEventListener("click", () => {
          navMobile.classList.toggle("active");
      })

      btnClose.addEventListener("click", () => {
          navMobile.classList.remove("active");
      })
    }

  }, [router])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
