import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpGist() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <amp-gist
          data-gistid="34a82751aa11ea19d5b74a0a442cfa2f"
          layout="fixed-height"
          height="225"
        >
        </amp-gist>
      </Layout>
    </React.Fragment>
  )
}