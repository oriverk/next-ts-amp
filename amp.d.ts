declare namespace JSX {
  type ReactAmp = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
    >
  
  // interface AmpCommonAttributes extends ReactApp {
  //   children?: React.ReactNode

  //   fallback?: ''
  //   heights?: string
  //   layouts?: 'nodispaly' | 'fixed' | 'responsive' | 'fixed-height' | 'fill' | 'container' | 'flex-item' | 'intrinsic'
  //   media?: string
  //   noloading?: ''
  //   on?: string
  //   placeholder?: ''
  //   sizes?: string
  //   width?: string
  //   height?: string
  // }
  
  interface AmpImg extends ReactAmp {
    children?: React.ReactNode
    alt?: string
    attribution?: string
    src?: string
    srcset?: string
    width?: string
    height?: string
    sizes?: string
    heights?: string
    layout?: 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive'
    fallback?: ''

    on?: string // amp-image-lightbox
    role?: string
    tabindex?: string
  }

  interface AmpSidebar extends ReactAmp {
    children?: React.ReactNode
    id?: string
    side?: 'left' | 'right'
    layout: 'nodisplay'
  }

  interface AmpImageLightbox extends ReactAmp {
    id?: string
    layout: 'nodisplay'
  }

  interface AmpImageSlider extends ReactApp {
    children?: React.ReactNode
    layout: 'fixed' | 'intrinsic' | 'nodisplay' | 'responsive'
    width: string
    height: string
  }

  interface AmpCarousel extends ReactApp {
    children: React.ReactNode
    layout?: 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive'
    width: string
    height: string
    type: 'slides' | 'carousel'
    role: 'region' | 'list' | 'listitem'
    controls?: ''
    loop?: ''
    autoplay?: ''
    delay?: string
  }
  
  interface AmpGoogleDocumentEmbed extends ReactApp {
    children: React.ReactNode
    layout?: 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive'
    src: string
    width: string
    height: string
  }

  interface AmpSocialShare extends ReactApp {
    class?: string
    type: 'system' | 'email' | 'facebook' | 'linkedin' | 'pinterest' | 'gplus' | 'tumblr' | 'twitter' | 'whatsapp' | 'line' | 'sms' | string
    width?: string
    height?: string
  }

  interface AmpTwitter extends ReactApp {
    children: React.ReactNode
    layout?: 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive'
    width: string
    height: string
  }

  interface AmpFacebook extends ReactApp {
    children: React.ReactNode
    layout?: 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'nodisplay' | 'responsive'
    width: string
    height: string
  }

  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-sidebar': AmpSidebar
    'amp-image-lightbox': AmpImageLightbox
    'amp-image-slider': AmpImageSlider
    'amp-carousel': AmpCarousel
    'amp-google-document-embed': AmpGoogleDocumentEmbed
    'amp-social-share': AmpSocialShare
    'amp-twitter': AmpTwitter
    'amp-facebook': AmpFacebook
    'amp-facebook-comments': AmpFacebook
    'amp-facebook-like': AmpFacebook
    'amp-facebook-page': AmpFacebook
  }
}