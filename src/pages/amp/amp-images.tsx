import css from 'styled-jsx/css'
import { AmpLayout } from '../../components/AmpLayout'

export const config = {
  amp: true
}

const shirase = require('@public/assets/shirase.jpg?resize')
const shiraseWebp = require('@public/assets/shirase.jpg?resize&format=webp')
const pikachu = require('@public/assets/pikachu.jpg?resize')
const pikachuLqip = require('@public/assets/pikachu.jpg?lqip')
const perth = require('@public/assets/perth.jpg?resize')

const style = css`
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
`

const Component: React.FC = () => {
  return (
    <>
      <AmpLayout>
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
      </AmpLayout>
      <style jsx>{style}</style>
    </>
  )
}

export default Component

const commonStyle = css`
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
`

const AmpImg: React.FC = () => {
  return (
    <>
      <h2 className='title'><a href='#amp-img'>amp-img with next-optimized-images</a></h2>
      <p>
        <a href='https://amp.dev/ja/documentation/components/amp-img/?format=websites' target='_blank' rel='noopener noreferrer'>the link of amp-img is here</a>
      </p>
      <p>
        <a href='https://github.com/cyrilwanner/next-optimized-images' target='_blank' rel='noopener noreferrer'>next-optimized-images </a>
        は画像を自動的に最適化するパッケージ及びプラグインで、このページでは主にjpgからwebpへの変換と複数サイズの画像の生成をしている。
      </p>
      <amp-img alt='shirase' layout='responsive'
        width={shiraseWebp.width} height={shiraseWebp.height}
        src={shiraseWebp.src} srcset={shiraseWebp.srcSet}
      >
        <amp-img
          fallback='' alt='shirase'
          width={shirase.width} height={shirase.height}
          src={shirase.src} srcset={shirase.srcSet}
        ></amp-img>
      </amp-img>
      <style jsx>{commonStyle}</style>
      <style jsx>{`
        amp-img {
          width: 95%;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

const AmpImageLightbox: React.FC = () => {
  return (
    <>
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
      <style jsx>{commonStyle}</style>
      <style jsx>{`
        .image-container {
          width: 95%;
          margin: 0 auto;
        }
        amp-img { 
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </>
  )
}

const AmpImageSlider = () => {
  return (
    <>
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
        <amp-img src={pikachuLqip} alt='lqip of pikachu' layout='fill'></amp-img>
        <amp-img src={pikachu.src} alt='pikachu' layout='fill'></amp-img>
        <div first='' className='label label-left-center'>this is pikachu lqip</div>
        <div second='' className='label label-right-center'>this is pikachu</div>
      </amp-image-slider>
      <style jsx>{commonStyle}</style>
      <style jsx>{`
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
    </>
  )
}

const AmpCarousel: React.FC = () => {
  return (
    <>
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
        <amp-carousel id='carousel-with-preview' layout='responsive'
          width='450' height='300'
          type='slides' role='region' aria-label='Carousel with slide previews'
        >
          <amp-img layout='responsive' alt='pikachu'
            src={pikachu.src} width={pikachu.width} height={pikachu.height}
          ></amp-img>
          <amp-img layout='responsive' alt='shirase'
            src={shirase.src} width={shirase.width} height={shirase.height}
          ></amp-img>
          <amp-img layout='responsive' alt='perth'
            src={perth.src} width={perth.width} height={perth.height}
          ></amp-img>
        </amp-carousel>
        <div className='carousel-preview'>
          {/* @ts-ignore */}
          <button on='tap:carousel-with-preview.goToSlide(index=0)'>
            <amp-img alt='pikachu'
              src={pikachu.src} width='60' height='40'
            ></amp-img>
          </button>
          {/* @ts-ignore */}
          <button on='tap:carousel-with-preview.goToSlide(index=1)'>
            <amp-img alt='shirase'
              src={shirase.src} width='60' height='40'
            ></amp-img>
          </button>
          {/* @ts-ignore */}
          <button on='tap:carousel-with-preview.goToSlide(index=2)'>
            <amp-img alt='perth'
              src={perth.src} width='60' height='40'
            ></amp-img>
          </button>
        </div>
      </div>
      <style jsx>{commonStyle}</style>
      <style jsx>{`
        amp-carousel {
          width: 100%;
        }
      `}</style>
    </>
  )
}