import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function Index() {
  const isAmp = useAmp()
  const original = require('@public/assets/shirase.jpg')
  const webp = require('@public/assets/shirase.jpg?webp')
  // console.log(original)
  // console.log(original.height)
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <h1>this is full amp page</h1>
        <div className='content'>
            <amp-img alt='Mountains'
              width="3888"
              height="2592"
              src={webp}
              layout='responsive'>
            <amp-img
              fallback=''
              alt='Mountains'
              width='3888'
              height='2592'
              src={original}
            ></amp-img>
            </amp-img>
        </div>
      </Layout>
      <style jsx>{`
        amp-img{
          max-width: 1000px;
        }
      `}</style>
    </React.Fragment>
  )
}