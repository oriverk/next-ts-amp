import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpImgs() {
  const isAmp = useAmp()
  // const original = require('@public/assets/shirase.jpg?original')
  const responsiveImage = require('@public/assets/shirase.jpg?resize')
  const responsiveWebp = require('@public/assets/shirase.jpg?resize&format=webp')
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <h1>this is full amp page</h1>
        <div className='content'>
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
        </div>
      </Layout>
      <style jsx>{`
        amp-img{
          max-width: 1000px;
        }
      `}</style>
    </React.Fragment>
  )
}