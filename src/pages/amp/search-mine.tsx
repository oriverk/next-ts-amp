import React from 'react'
import Head from 'next/head'
import { AmpLayout } from '../../components/AmpLayout'
import css from 'styled-jsx/css'
import blogConfig from '../../../blog.config'

export const config = {
  amp: true
}

const style = css`
  .container {
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #424242;
    color: #EEE;
    text-align: center;
  }
  input {
    width: 50%;
    height: 2rem;
    background-color: #EEE;
  }
`

const Component: React.FC = () => {
  const algolia = '/amp-script/algolia.js'
  const algoliaSrc = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' + algolia : blogConfig.baseUrl + algolia;
  return (
    <AmpLayout>
      <Head>
        <meta name='amp-script-src' content='sha384-3WgF_oK2RKt4DfGWiM3YBrsSM8LwiDrLd0hkWIoTHmpDmP3iLQI5GdLYg7zNFGL9' />
      </Head>
      <div className='container'>
        <div className='content'>
          <amp-script layout='container' src={algoliaSrc} >
            <input
              type='search'
              id='search-input'
              placeholder='Type to search ... (e.g. google)'
            />
            <div id='search-results'>No results</div>
          </amp-script>
        </div>
      </div>
      <style jsx>{style}</style>
    </AmpLayout>
  )
}

export default Component