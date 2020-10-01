import PropTypes from 'prop-types'
import React from 'react'
import { AmpIncludeAmpScript } from './AmpCustomElement'

export default function AmpScript(props) {
  return (
    <>
      <AmpIncludeAmpScript />
      <amp-script
        layout={props.layout}
        width={props.width}
        height={props.height}
        script={props.id}
        src={props.src}
      >
        {props.children}
      </amp-script>
      {props.script && (
        <script
          id={props.id}
          type="text/plain"
          target="amp-script"
          dangerouslySetInnerHTML={{
            __html: generateInlineScript(props.script),
          }}
        />
      )}
    </>
  )
}

function generateInlineScript(script) {
  if (typeof script === 'function') {
    return `${script.toString()}()`
  }
  return String(script)
}