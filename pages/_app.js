import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../context/themeContext'


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head lang='eng'>
        <title>Gaming Stats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>

      
      
    </React.Fragment>
  )
}

export default MyApp
