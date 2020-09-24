import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function Imgs() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='content'>
          <h1>This is Full AMP mode page</h1> 
          <div className='contents amp-img'>
            <AmpImgs />
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .contents{
          border-bottom: .2rem solid #000;
          padding: 0 2rem 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </React.Fragment>
  )
}
function AmpImgs() {
  // const original = require('@public/assets/shirase.jpg?original')
  const responsiveImage = require('@public/assets/shirase.jpg?resize')
  const responsiveWebp = require('@public/assets/shirase.jpg?resize&format=webp')
  return (
    <React.Fragment>
      <h2>This is with amp-img and next-optimized-images</h2>
      <amp-img alt='shirase'
        width={responsiveWebp.width}
        height={responsiveWebp.height}
        src={responsiveWebp.src}
        srcset={responsiveWebp.srcSet}
        layout='responsive'>
      <amp-img
        fallback=''
        alt='shirase'
        width={responsiveImage.width}
        height={responsiveImage.height}
        src={responsiveImage.src}
        srcset={responsiveImage.srcSet}
      ></amp-img>
      </amp-img>
      <style jsx>{`
        amp-img{
          max-width: 1000px;
        }
      `}</style>
    </React.Fragment>
  )
}