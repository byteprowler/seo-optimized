import React from 'react'

import { Head, Main, Html, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet='UTF-8' />
        
        <meta name="title" content="Aluminium Ladder Store - Durable & Reliable" />
        <meta name="descriptions" content="Shop the best best aluminium ladders in Nigeria - strong, affordable, built to last. Natiowide Delivery available" />
        <meta name="keywords" content="aluminium ladder, foldable ladder, industrial ladder, buy ladder in Nigeria, home ladder" />
        <meta name="author" content="byteprowler"  />
        <meta name="robots" content='index, follow' />
        <meta name="theme-color" content="#ffffff" />
      
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.come" />
        <meta property="og:title" content="Aluminium Ladder Store - Durabl& Reliable" />
        <meta property="og:description" content="Shop the best aluminium ladders in Nigeria - strong, affordable and built to last." />
        <meta property="og:image" content="/public/jlp.png" />
      
        {/* Twitter */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
