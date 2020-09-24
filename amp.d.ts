declare namespace JSX {
  type ReactAmp = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  
  interface AmpImg extends ReactAmp {
    // children?: React.ReactNode;
    alt?: string;
    attribution?: string;
    src?: string;
    srcset?: string;
    width: string;
    height: string;
    sizes?: string;
    heights?: string;
    layout?: 'fill' | 'fixed' | 'fixed-height' | 'flex-item' | 'intrinsic' | 'nodisplay' | 'responsive';
    fallback?: any;

    on?: string; // amp-image-lightbox
    role?: string;
    tabindex?: string;
  }

  interface AmpSidebar extends ReactAmp {
    children?: React.ReactNode;
    id?: string;
    side?: 'left' | 'right';
    layout: 'nodisplay';
  }

  interface AmpImageLightbox extends ReactAmp {
    id?: string;
    layout: 'nodisplay';
  }

  interface IntrinsicElements {
    'amp-img': AmpImg;
    'amp-sidebar': AmpSidebar;
    'amp-image-lightbox': AmpImageLightbox;
  }
}