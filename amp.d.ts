// source
// stack overflow : https://stackoverflow.com/questions/50585952/typescript-and-google-amp-property-amp-img-does-not-exist-on-type-jsx-intrin/50601125#50601125
// amp.d.ts of a gist : https://gist.github.com/azu/2dec148bcec2ea8a34c894aee51b3571
// amp.t.ts of a project : https://github.com/SYMBIO/next-devstack/blob/761fcc46904f5dca0bb1b457f6e387fe007c023a/src/types/amp.d.ts#L1

declare namespace JSX {
  // ReactAmp型の定義
  type ReactAmp = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  
  interface AmpImg extends ReactAmp {
    // children?: any;
    alt?: string;
    attribution?: string;
    src?: string;
    srcset?: string;
    width: string;
    height: string;
    sizes?: string;
    heights?: string;
    layout?: string;
    fallback?: any;
  }

  interface AmpSidebar extends ReactAmp {
    // children?: any;
    id?: string;
    side?: 'left' | 'right';
    layout: 'nodisplay';
  }

  interface IntrinsicElements {
    'amp-img': AmpImg;
    'amp-sidebar': AmpSidebar;
  }
}