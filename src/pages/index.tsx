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
        <div className='home'>
          <div className='title'>
            <h1>Here is Next.js.ts - AMP Playground.</h1>
            <p>Play well, Absorb well, Use well.</p>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .home {
          position: relative;
          height: 100vh;
          width: 100%;
          max-width: 
          background-color: #212121;
          background-size: cover;
          background-position: center;
          background-image: url('./assets/sunrise.jpg');
        }
        .title {
          color: #EEE;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)
        }
      `}</style>
    </React.Fragment>
  )
}