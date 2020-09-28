import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpAccordion() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='content'>
          <amp-accordion disable-session-states=''>
            <section>
              <h2>Section 1</h2>
              <p>Content in section 1.</p>
            </section>
            <section>
              <h2>Section 2</h2>
              <div>Content in section 2.</div>
            </section>
            {/* @ts-ignore */}
            <section expanded>
              <h2>Section 3</h2>
              <amp-img src="/static/inline-examples/images/squirrel.jpg"
                width="320"
                height="256"></amp-img>
            </section>
          </amp-accordion>
        </div>
      </Layout>
    </React.Fragment>
  )
}