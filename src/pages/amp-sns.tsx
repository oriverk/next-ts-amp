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
        <div className='container'>
          <h1>These are amp component like SNS</h1>
          <div className='amp-twitter'>
            <h2 className='title'>
              <a href='#amp-twitter'>amp-twitter</a>
            </h2>
            <a href='https://amp.dev/ja/documentation/components/amp-twitter/?format=websites'>
              link of amp-tiwitter is here.
            </a>
            <amp-twitter width='375' height='472' layout='responsive' data-tweetid='1308103704390676481' >
            </amp-twitter>
          </div>
          <div className='amp-facebook'>
            <h2 className='title'>
              <a href='#amp-facebook'>amp-facebook</a>
            </h2>
            <a href='https://amp.dev/ja/documentation/components/amp-facebook/?format=websites'>
              link of amp-facebook is here.
            </a>
            <amp-facebook width='552' height='310' layout='responsive'
              data-href='https://www.facebook.com/ParksCanada/posts/1712989015384373'>
            </amp-facebook>
          </div>
          <div className='amp-facebook-like'>
            <h2 className='title'>
              <a href='#amp-facebook-like'>amp-facebook-like</a>
            </h2>
            <a href='https://amp.dev/ja/documentation/components/amp-facebook-like/?format=websites'>
              link of amp-facebook-like is here.
            </a>
            <amp-facebook-like width='90' height='20' layout='fixed' data-layout='button_count'
              data-href='https://www.facebook.com/testesmegadivertidos/'
              >
            </amp-facebook-like>
          </div>
          <div className='amp-facebook-comments'>
            <h2 className='title'>
              <a href='#amp-facebook-comments'>amp-facebook-comments</a>
            </h2>
            <a href='https://amp.dev/ja/documentation/components/amp-facebook-like/?format=websites'>
              link of amp-facebook-comments is here.
            </a>
            <amp-facebook-comments width='486' height='657' layout='responsive'
              data-href='http://www.directlyrics.com/adele-25-complete-album-lyrics-news.html'>
            </amp-facebook-comments>
          </div>
          <div className='amp-facebook-page'>
            <h2 className='title'>
              <a href='#amp-facebook-page'>amp-facebook-page</a>
            </h2>
            <a href='https://amp.dev/ja/documentation/components/amp-facebook-page/?format=websites'>
              link of amp-facebook-page is here.
            </a>
            <amp-facebook-page width='340' height='130' layout='fixed'
              data-hide-cover='true' data-href='https://www.facebook.com/imdb/'
              >
            </amp-facebook-page>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          min-height: 100vh;
          background-color: #424242;
          color: #EEE;
          text-align: center;
        }
        amp-facebook, amp-facebook-like, amp-facebook-comments, amp-facebook-page {
          margin: 0 auto;
        }
        a {
          color: #50CAF9;
        }
        .title a {
          color: #EEE;
          text-decoration: none;
        }
        .title a:hover{
          text-decoration: underline #50CAF9;
        }

      `}</style>
    </React.Fragment>
  )
}