import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import { LeftDrawer } from './NavigationDrawer'

type Props = {
  children?: ReactNode
  title?: string
  isAmp: boolean
}

const Layout = ({ children, isAmp }: Props) => (
  <React.Fragment>
    <Head>
      {!isAmp && (
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      )}
    </Head>
    <LeftDrawer isAmp={isAmp} />
    {/* @ts-ignore */}
    <div className='left swipe-bar' role='button' on='tap:sidebar-left' tabIndex='1' ></div>
    {/* @ts-ignore */}
    <div className='left swipe-button' role='button' on='tap:sidebar-left' tabIndex='1'>amp-sidebar button</div>
    <main>
      <div className='contents'>
        {children}
      </div>
    </main>
    <style jsx>{`
      .left.swipe-bar {
        width: 20px;
        height: 100vh;
        position: fixed;
        left: 0;
        z-index: 100;
      }
      .left.swipe-button {
        padding: .5rem;
        border-radius: .5rem;
        border: 0.1rem solid #333;
        font-weight: bold;
        text-align: center;
        background-color: #50CAF9;
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        z-index: 100;
      }

      main{
        width: 100vw;
        min-height: 100vh;
      }
      .contents {
        color: #EEE;
        width: 100%;
        min-height: 100vh;
        background-color: #333;
      }
    `}</style>
  </React.Fragment>
)

export default Layout
