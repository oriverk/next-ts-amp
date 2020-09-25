import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpGoogleDocumentEmbed() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='content'>
          <h2>amp-twitter</h2>
          <amp-twitter width='375' height='472' layout='responsive' data-tweetid='1308103704390676481' >
          </amp-twitter>
        </div>
        <div className='content'>
          <h2>amp-facebook</h2>
          <amp-facebook width='552' height='310' layout='responsive'
            data-href='https://www.facebook.com/ParksCanada/posts/1712989015384373'>
          </amp-facebook>
        </div>
        <div className='content'>
          <h2>amp-facebook-like</h2>
          <amp-facebook-like width='90' height='20' layout='fixed' data-layout='button_count'
            data-href='https://www.facebook.com/testesmegadivertidos/'
          >
          </amp-facebook-like>
        </div>
        <div className='content'>
          <h2>amp-facebook-comments</h2>
          <amp-facebook-comments width='486' height='657' layout='responsive'
            data-href='http://www.directlyrics.com/adele-25-complete-album-lyrics-news.html'>
          </amp-facebook-comments>
        </div>
        <div className='content'>
          <h2>amp-facebook-page</h2>
          <amp-facebook-page width='340' height='130' layout='fixed'
            data-hide-cover='true' data-href='https://www.facebook.com/imdb/'
          >
          </amp-facebook-page>
        </div>
      </Layout>
    </React.Fragment>
  )
}