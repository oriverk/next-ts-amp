import React from 'react'
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

// const algolia = css`
//   /* amp-scirt for algolia */
//   .search-item a {
//     display: block;
//     padding: .5rem;
//     text-decoration: none;
//     color: #EEE;
//     border-radius: .5rem;
//     border: 1px solid #EEE;
//   }

//   .search-item a:hover , .search-item a:active, .search-item a:visited{
//     background-color: #333;
//     border: 1px solid #50CAF9;
//   }
//   .tag span{
//     display: inline-block;
//     font-size: .9rem;
//     border-radius: 2rem;
//     border: 1px solid #50CAF9;
//     padding: 0.1rem .5rem;
//     margin: .5rem .3rem;
//     color: #EEE;
//   }
// `

const Component: React.FC = () => {
  const algolia = '/amp-script/algolia.js'
  const algoliaSrc = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' + algolia : blogConfig.baseUrl + algolia;
  // const algoliaSrc = blogConfig.baseUrl + algolia;
  return (
    <AmpLayout>
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
      {/* <style global jsx>{algolia}</style> */}
    </AmpLayout>
  )
}

export default Component