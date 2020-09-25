import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpGoogleDocumentEmbed() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='content'>
          <amp-google-document-embed src='https://www.gpo.gov/fdsys/pkg/GPO-CONAN-1992/pdf/GPO-CONAN-1992-6.pdf' width='8.5' height='11' layout='responsive'>
          </amp-google-document-embed>
        </div>
      </Layout>
    </React.Fragment>
  )
}