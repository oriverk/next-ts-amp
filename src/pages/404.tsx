import React from 'react'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function Custom404page() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='astray'>
          <div className='title'>
            <h1>Oh, you got astray?</h1>
            <p>
              <a href='/'>I feel sorry but go back to home plz.</a>
            </p>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .astray {
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
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)
        }
        .title a {
          color: #50CAF9;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
        }
        .title a:hover {
          text-decoration: underline #50CAF9;
        }
      `}</style>
    </React.Fragment>
  )
}