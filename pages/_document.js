import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Document() {


  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        
        {/* <script src='./assets/js/main.js' async /> */}

      </body>
    </Html>
  )
}