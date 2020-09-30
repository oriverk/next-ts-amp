import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: 'hybrid'
}

export default function Full() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      
      <Layout title='Home | Next.js + TypeScript Example' isAmp={isAmp}>
        <div className='container'>
          <div className='desc'>
            <h1>Hello Next.js 👋</h1>
            <h2>This is hybrid amp page</h2>
          </div>
          <p>
            {isAmp ? (
              <Link href='/hybrid'>
                <a>change back to normal mode</a>
              </Link>
            ) : (
              <Link href='/hybrid?amp=1'>
                <a>change to amp mode</a>
              </Link>
            )}
          </p>
          <p>
            <Link href='/'>
              <a>go back to full amp page</a>
            </Link>
          </p>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background-color: #424242;
          color: #EEE;
          text-align: center;
          min-height: 100vh;
        }
        a {
          color: #50CAF9;
        }
      `}</style>
    </React.Fragment>
  )
}