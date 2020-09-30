import React from 'react'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

const shirase = require('@public/assets/shirase.jpg?resize')
const pikachu = require('@public/assets/pikachu.jpg?resize')
const perth = require('@public/assets/perth.jpg?resize')

export default function Imgs() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='container'>
          <h1>This is Full AMP mode page</h1> 
          <div className='amp-img'>
            <AmpImg />
          </div>
          <div className='amp-image-lightbox'>
            <AmpImageLightbox />
          </div>
          <div className='amp-image-slider'>
            <AmpImageSlider />
          </div>
          <div className='amp-carousel'>
            <AmpCarousel />
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
        .container div {
          border-bottom: .1rem solid #EEE;
          padding: 0 2rem 2rem;
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
      <h2 className='title'><a href='#amp-img'>amp-img with next-optimized-images</a></h2>
      <p>
        <a href='https://amp.dev/ja/documentation/components/amp-img/?format=websites' target='_blank' rel='noopener noreferrer'>the link of amp-img is here</a>
      </p>
      <p>
        <a href='https://github.com/cyrilwanner/next-optimized-images' target='_blank' rel='noopener noreferrer'>next-optimized-images </a>
        は画像を自動的に最適化するパッケージ及びプラグインで、このページでは主にjpgからwebpへの変換と複数サイズの画像の生成をしている。
      </p>
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
        amp-img {
          width: 95%;
          margin: 0 auto;
        }
      `}</style>
    </React.Fragment>
  )
}

function AmpImageLightbox() {
  return (
    <React.Fragment>
      <div className='desc'>
        <h2 className='title'><a href='#amp-image-lightbox'>amp-image-lightbox and figcaption</a></h2>
        <p>
          <a href='https://amp.dev/ja/documentation/components/amp-image-lightbox/?format=websites' target='_blank' rel='noopener noreferrer'>
            link of amp-image-lightbox is here.
          </a>
        </p>
        <p>1つの amp-image-lightbox で複数の画像に適用できる。</p>
      </div>
      <amp-image-lightbox id='lightbox1' layout='nodisplay' />
      <figure className='image-conatainer'>
        <figcaption>JSDF Antarctic IceBreaker Shirase</figcaption>
        <amp-img on='tap:lightbox1' role='button' tabindex='0' layout='responsive' className='shirase' width={shirase.width} height={shirase.height} src={shirase.src}></amp-img>
      </figure>
      <div className='image-container'>
        <div id='imageDescription'>This is a wild pikachu in Perth WA. Australia.</div>
        <amp-img on='tap:lightbox1' role='button' tabindex='0' layout='responsive' className='pikachu' aria-describedby='imageDescription' width={pikachu.width} height={pikachu.height} src={pikachu.src}></amp-img>
      </div>
      <style jsx>{`
        a {
          color: #50CAF9;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .title a {
          color: #EEE;
          text-decoration: none;
        }
        .title a:hover {
          text-decoration: underline #50CAF9;
        }
        .image-container {
          width: 95%;
          margin: 0 auto;
        }
        amp-img { 
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}

function AmpImageSlider() {
  const lqip = require('@public/assets/pikachu.jpg?lqip')
  return (
    <React.Fragment>
      <div className='desc'>
        <h2 className='title'><a href='#amp-image-slider'>amp-image-slider</a></h2>
        <p id='amp-image-slider'>
          <a href='https://amp.dev/ja/documentation/components/amp-image-slider/?format=websites' target='_blank' rel='noopener noreferrer'>
            link of amp-image-slider is here.
          </a>
        </p>
        <p>
          amp-image-slider は画像のキャプションの為に、div が first や second と言った attribute を持つ。@ts-ignore で握り潰しても良いが、折角なので index.d.ts で定義した。
        </p>
      </div>
      {/* @ts-ignore */}
      <amp-image-slider layout='responsive' width='300' height='200' class='triangle-hint'>
        <amp-img src={lqip} alt='lqip of pikachu' layout='fill'></amp-img>
        <amp-img src={pikachu.src} alt='pikachu' layout='fill'></amp-img>
        <div first='' className='label label-left-center'>this is pikachu lqip</div>
        <div second='' className='label label-right-center'>this is pikachu</div>
      </amp-image-slider>
      <style jsx>{`
        a {
          color: #50CAF9;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .title a {
          color: #EEE;
          text-decoration: none;
        }
        .title a:hover {
          text-decoration: underline #50CAF9;
        }
        amp-image-slider {
          width: 95%;
        }
        amp-img {
          width: 100%;
        }
        .label {
          color: white;
          background-color: rgba(0, 0, 0, 0.4);
          width: 6rem;
          padding: 1rem 0;
          text-align: center;
          font-weight: bold;
        }
        .label-left-center {
          top: 50%;
          left: 1rem;
          transform: translateY(-50%);
        }
        .label-right-center {
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
        }
      `}</style>
    </React.Fragment>
  )
}

function AmpCarousel() {
  return (
    <React.Fragment>
      <div className='desc'>
        <h2 className='title'><a href='#amp-carousel'>amp-carousel</a></h2>
        <p>
          <a href='https://amp.dev/ja/documentation/components/amp-carousel/?format=websites' target='_blank' rel='noopener noreferrer'>
            link of amp-carousel is here.
          </a>
        </p>
      </div>
      <div className='carousel1'>
        <amp-carousel type='slides'
          width='450' height='300'
          controls='' loop='' autoplay='' delay='3000' layout='responsive'
          data-next-button-aria-label='Go to next slide' data-previous-button-aria-label='Go to previous slide'
          role='region' aria-label='Looping carousel'>
          <amp-img src={shirase.src} width={shirase.width} height={shirase.height}></amp-img>
          <amp-img src={pikachu.src} width={shirase.width} height={shirase.height}></amp-img>
          <amp-img src={perth.src} width={shirase.width} height={shirase.height}></amp-img>
        </amp-carousel>
      </div>
      <div className='carousel2'>
        <amp-carousel
          id='carousel-with-preview'
          width='450'
          height='300'
          layout='responsive'
          type='slides'
          role='region'
          aria-label='Carousel with slide previews'
        >
          <amp-img
            src={pikachu.src}
            width={pikachu.width}
            height={pikachu.height}
            layout='responsive'
            alt='pikachu'
          ></amp-img>
          <amp-img
            src={shirase.src}
            width={shirase.width}
            height={shirase.height}
            layout='responsive'
            alt='shirase'
          ></amp-img>
          <amp-img
            src={perth.src}
            width={perth.width}
            height={perth.height}
            layout='responsive'
            alt='perth'
          ></amp-img>
        </amp-carousel>
        <div className='carousel-preview'>
          {/* @ts-ignore */}
          <button on='tap:carousel-with-preview.goToSlide(index=0)'>
            <amp-img
              src={pikachu.src}
              width='60'
              height='40'
              alt='pikachu'
            ></amp-img>
          </button>
          {/* @ts-ignore */}
          <button on='tap:carousel-with-preview.goToSlide(index=1)'>
            <amp-img
              src={shirase.src}
              width='60'
              height='40'
              alt='shirase'
              ></amp-img>
          </button>
          {/* @ts-ignore */}
          <button on='tap:carousel-with-preview.goToSlide(index=2)'>
            <amp-img
              src={perth.src}
              width='60'
              height='40'
              alt='perth'
            ></amp-img>
          </button>
        </div>
      </div>
      <style jsx>{`
        a {
          color: #50CAF9;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .title a {
          color: #EEE;
          text-decoration: none;
        }
        .title a:hover {
          text-decoration: underline #50CAF9;
        }
        amp-carousel {
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}