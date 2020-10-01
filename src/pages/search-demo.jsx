import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpAlgolia() {
  const isAmp = useAmp()
  const algolia = '/amp-script/algolia-demo.js'
  const algoliaSrc = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' + algolia : 'https://next-ts-amp.oriverk.dev' + algolia;
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='container'>
          <div className='title'>
            <h1>Custom search with amp-script</h1>
            <p>This samples demonstrates how to integrat
              <a href="https://www.algolia.com">algolia custom search</a> in AMP using
              <a href="https://amp.dev/documentation/components/amp-script/">amp-script</a>.
            </p>
          </div>
          <div className='content'>
            <amp-script layout="container" src={algoliaSrc} >
              <input
                type="search"
                id="search-input"
                placeholder="Type to search ... (e.g. google)"
              />
              <div id="search-results">No results</div>
            </amp-script>
            <p><a href="https://glitch.com/edit/#!/amp-script-demos?path=public/algolia.html:1:0" >Edit on Glitch</a></p>
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