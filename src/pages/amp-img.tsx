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
            <AmpImg />
          </div>
          <div className='contents amp-image-lightbox'>
            <AmpImageLightbox />
          </div>
          <div className='contents amp-image-slider'>
            <AmpImageSlider />
          </div>
          <div className='contents amp-carousel'>
            <AmpCarousel />
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
  const responsiveImage = require('@public/assets/shirase.jpg?resize')
  const responsiveWebp = require('@public/assets/shirase.jpg?resize&format=webp')
  return (
    <React.Fragment>
      <h2 id='#amp-img'>amp-img and next-optimized-images
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
        <h2 id='amp-image-lightbox'>amp-image-lightbox with figcaption
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

function AmpImageSlider() {
  // const original = require('@public/assets/shirase.jpg?original')
  const shirase = require('@public/assets/shirase.jpg?resize')
  const pikachu = require('@public/assets/pikachu.jpg?resize')
  return (
    <React.Fragment>
      <div className='desc'>
        <h2 id='amp-image-slider'>amp-image-slider
          <a href='https://amp.dev/ja/documentation/components/amp-image-slider/?format=websites' target='_blank' rel='noopener noreferrer'>：リンク</a>
        </h2>
        <p>`amp-image-slider`の為だけに div を拡張したけど、恐らくやり方を間違えてるかな・・・あと、画像サイズ(特に高さ）を一緒にしないと何が何だか。あと、div内の first や second は、amp-imgのfallbackの様に例えば『first=''』としないと、吹っ飛ぶ</p>
      </div>
      <amp-image-slider layout='responsive' width='100' height='200'>
        <amp-img src={shirase.src} alt='shirase' width={pikachu.width} height={pikachu.height}></amp-img>
        <amp-img src={pikachu.src} alt='pikachu' width={pikachu.width} height={pikachu.height}></amp-img>
        <div first=''>this is shirase</div>
        <div second=''>this is pikachu</div>
      </amp-image-slider>
      <style jsx>{`
        amp-img{ max-width: 1000px; }
        div{ color: white; font-size: 1rem; font-weight:bold;}
      `}</style>
    </React.Fragment>
  )
}

function AmpCarousel() {
  // const original = require('@public/assets/shirase.jpg?original')
  const shirase = require('@public/assets/shirase.jpg?resize')
  const pikachu = require('@public/assets/pikachu.jpg?resize')
  const perth = require('@public/assets/perth.jpg?resize')
  return (
    <React.Fragment>
      <div className='desc'>
        <h2 id='amp-carousel'>amp-carousel
          <a href='https://amp.dev/ja/documentation/components/amp-carousel/?format=websites' target='_blank' rel='noopener noreferrer'>：リンク</a>
        </h2>
        <p></p>
      </div>
      <amp-carousel type="slides"
        width="450" height="300"
        controls='' loop='' autoplay='' delay="3000"
        data-next-button-aria-label="Go to next slide" data-previous-button-aria-label="Go to previous slide"
        role="region" aria-label="Looping carousel">
        <amp-img src={shirase.src} width={shirase.width} height={shirase.height}></amp-img>
        <amp-img src={pikachu.src} width={shirase.width} height={shirase.height}></amp-img>
        <amp-img src={perth.src} width={shirase.width} height={shirase.height}></amp-img>
      </amp-carousel>
      <style jsx>{`
        amp-img{ max-width: 1000px; }
      `}</style>
    </React.Fragment>
  )
}