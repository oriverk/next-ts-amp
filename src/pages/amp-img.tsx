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
          <div id='amp-img' className='contents amp-img'>
            <AmpImg />
          </div>
          <div id='amp-image-lightbox' className='contents amp-image-lightbox'>
            <AmpImageLightbox />
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

function AmpImg() {
  // const original = require('@public/assets/shirase.jpg?original')
  const responsiveImage = require('@public/assets/shirase.jpg?resize')
  const responsiveWebp = require('@public/assets/shirase.jpg?resize&format=webp')
  return (
    <React.Fragment>
      <h2>amp-img and next-optimized-images
        <a href='https://amp.dev/ja/documentation/components/amp-img/?format=websites' target='_blank' rel='noopener noreferrer'>：リンク</a>
      </h2>
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

function AmpImageLightbox() {
  // const original = require('@public/assets/shirase.jpg?original')
  const shirase = require('@public/assets/shirase.jpg?resize')
  const pikachu = require('@public/assets/pikachu.jpg?resize')
  return (
    <React.Fragment>
      <div className='desc'>
        <h2>amp-image-lightbox with figcaption
          <a href='https://amp.dev/ja/documentation/components/amp-image-lightbox/?format=websites' target='_blank' rel='noopener noreferrer'>：リンク</a>
        </h2>
        <p>1つの amp-image-lightbox で複数の画像に適用できるということは、Layout compo で前ページに入れても良い気がするんだ。</p>
      </div>
      <amp-image-lightbox id='lightbox1' layout='nodisplay' />
      <figure>
        <amp-img on='tap:lightbox1' role='button' tabindex='0' layout='responsive' className='shirase' width={shirase.width} height={shirase.height} src={shirase.src}></amp-img>
        <figcaption>JSDF Antarctic IceBreaker Shirase</figcaption>
      </figure>
      <div>
        <amp-img on='tap:lightbox1' role='button' tabindex='0' layout='responsive' className='pikachu' aria-describedby='imageDescription' width={pikachu.width} height={pikachu.height} src={pikachu.src}></amp-img>
        <div id='imageDescription'>This is a wild pikachu in Perth WA. Australia.</div>
      </div>
      <style jsx>{`
        amp-img{ max-width: 1000px; }
      `}</style>
    </React.Fragment>
  )
}