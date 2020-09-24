import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function Index() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <h1>this is full amp page</h1>
        <div className='content'>
          <h2>Here is Next.js - TypeScript with AMP playground.</h2>
          <p><strong>Eat well, work well, play well and sleep well.</strong></p>
        </div>
      </Layout>
    </React.Fragment>
  )
}