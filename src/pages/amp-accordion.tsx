import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpAccordion() {
  const isAmp = useAmp()
  const image = require('@public/assets/perth.jpg?resize')
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='amp-accordion'>
          <amp-accordion disable-session-states=''>
            <section>
              <h2>amp-accordion</h2>
              <p>
                <Link href='https://amp.dev/ja/documentation/components/amp-accordion/?format=websites'>
                  <a>amp-accordion link is here</a>
                </Link>
              </p>
            </section>
            <section>
              <h2>Section 1</h2>
              <p>Content in section 1.</p>
            </section>
            <section>
              <h2>Section 2</h2>
              <p>Content in section 2.</p>
            </section>
            {/* @ts-ignore */}
            <section expanded>
              <h2>Section 3</h2>
              <amp-img src={image.src}
                width={image.width}
                height={image.height}
                ></amp-img>
            </section>
          </amp-accordion>
        </div>
      </Layout>
      <style jsx>{`
        .amp-accordion {
          text-align: center;
          width: 100%;
          max-width: 800px;
          min-height: 100vh;
          margin: 0 auto;
          background-color: #424242;
        }
        amp-accordion a {
          color: #50CAF9;
        }
        amp-accordion h2 {
          background-color: #424242;
          color: #EEE;
        }
        amp-accordion p {
          padding: 1rem;
        }
        amp-accordion amp-img{
          margin: 1rem auto;
        }
      `}</style>
    </React.Fragment>
  )
}