import React from 'react'
import { useAmp } from 'next/amp'

export function Image({ src, alt, imgStyle, anchor }: {
  src?: string,
  alt?: string,
  imgStyle?: React.CSSProperties,
  anchor?: boolean
}) {
  const isAmp = useAmp()

  if (src.startsWith('http')) {
    return (
      <React.Fragment>
        { anchor ? (
          <a href={src} rel="noreferrer noopener" target="_blank">
            <img src={src} alt={alt || ''} />
          </a>
        ) : (
            <img src={src} alt={alt || ''} />
          )}
      </React.Fragment>
    )
  } else {
    const Src = src || '/assets/ImageIsMissing.png'
    const Alt = src ? alt : 'image is missing'
    return (
      <React.Fragment>
        { anchor ? (
          <a href={Src} target='_blank' rel='noopener noreferrer'>
            <OptimizedImages src={Src} alt={Alt} imgStyle={imgStyle} />
          </a>
        ) : (
            <OptimizedImages src={Src} alt={Alt} imgStyle={imgStyle} />
          )}
      </React.Fragment>
    )
  }
}

function OptimizedImages({ src, alt, imgStyle }: {
  src?: string,
  alt: string,
  imgStyle?: React.CSSProperties
}) {
  const replaced = src.replace(/^.?\/assets\/?/, '')
  // => processed = '/home/example.jpg'

  const responsiveImage = require(`@public/assets/${replaced}?resize`)
  const responsiveImageWebp = require(`@public/assets/${replaced}?resize&format=webp`)

  return (
    <React.Fragment>
      <picture>
        <source
          srcSet={responsiveImageWebp.srcSet}
          type='image/webp'
          style={imgStyle}
        />
        <img
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          alt={alt}
          style={imgStyle}
          width={responsiveImage.width}
          height={responsiveImage.height}
          loading='lazy'
        />
      </picture>
    </React.Fragment>
  )
}

export function AmpImage({ src, alt, width, height, fallback }: {
  src: string,
  alt: string,
  width: string,
  height: string,
  fallback?: boolean
}) {
  return (
    <amp-img alt={alt}
      width={width}
      height={height}
      src={src}>
      {fallback && (
        <amp-img alt={alt}
          fallback
          width={width}
          height={height}
          src={src}></amp-img>
      )}
    </amp-img>
  )
}