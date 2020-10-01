import React from 'react'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpScriptExample() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        
        <div className='container'>
          <div className='desc'>
            <h1>amp-script</h1>
            <a href='https://amp.dev/ja/documentation/components/amp-img/?format=websites' target='_blank' rel='noopener noreferrer'>link of amp-script is here</a>
          </div>
          <section className='normal'>
            <h2><a href='normal-amp-script'>normal amp-script</a></h2>
            <a href='https://github.com/vercel/next.js/tree/79e717a76bd1d0aaac4be7111b8d438380528e74/examples/amp-first' target='_blank' rel='noopener noreferrer'>
              this source code is from next.js/example/amp-first
            </a>
            <div className='script1'>

            </div>
            <div className='script2'>
              <p>embed amp-script</p>
              
            </div>
          </section>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 800px;
          min-height: 100vh;
          margin: 0 auto;
          background-color: #424242;
          color: #EEE;
          text-align: center;
        }
        a {
          color: #50CAF9;
        }
        h2 a {
          color: #EEE;
          text-decoration: none;
        }
        h2 a:hover {
          text-decoration: underline #50CAF9;
        }
      `}</style>
    </React.Fragment>
  )
}