import { AriaAttributes, DOMAttributes } from "react"

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React HTMLAttributes
    first?: '' // only for amp-image-slider
    second?: '' // ..
  }  
}
