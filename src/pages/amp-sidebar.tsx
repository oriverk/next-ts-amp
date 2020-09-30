import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpSidebar() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='amp-sidebar'>
          <div className='container'>
            {/* @ts-ignore */}
            <button on='tap:sidebar-left.toggle'>Toggle sidebar</button>
            <br />
            <Link href='https://amp.dev/ja/documentation/components/amp-sidebar/?format=websites'>
              <a>amp-sidebar link is here.</a>
            </Link>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .amp-sidebar {
          width: 100%;
          max-width: 800px;
          min-height: 100vh;
          margin: 0 auto;
          background-color: #424242;
          text-align: center;
          position: relative;
        }
        .container{
          position: absolute;
          margin: 0 auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 0)
        }
        .container button {
          font-size: 1.5rem;
          padding: 1rem;
          font-weight: bold;
          background-color: orange;
          border: 1px solid #000;
          border-radius: .5rem;
          margin-bottom: 1rem;
        }
        .container a {
          color: #50CAF9;
          text-decoration: none;
        }
        .container a:hover {
          text-decoration: underline;
        }
      `}</style>
    </React.Fragment>
  )
}