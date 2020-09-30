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
          <h1 className='title'><a>amp-google-document-embed</a></h1>
          <div className='desc'>
            <a href='https://amp.dev/ja/documentation/components/amp-google-document-embed/?format=websites'>
              link of amp-google-document-embed is here.
            </a>
          </div>
        <div className='content'>
          <amp-google-document-embed src='https://www.gpo.gov/fdsys/pkg/GPO-CONAN-1992/pdf/GPO-CONAN-1992-6.pdf' width='8.5' height='11' layout='responsive'>
          </amp-google-document-embed>
        </div>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background-color: #424242;
          color: #EEE;
          text-align: center;
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
        .desc {
          margin-bottom: 2rem;
        }
      `}</style>
    </React.Fragment>
  )
}