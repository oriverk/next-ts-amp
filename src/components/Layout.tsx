import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { NavigationDrawer } from './NavigationDrawer'

type Props = {
  children?: ReactNode
  title?: string
  isAmp: boolean
}

const Layout = ({ children, title = 'This is the default title', isAmp }: Props) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      {!isAmp && (
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      )}
    </Head>
    <NavigationDrawer isAmp={isAmp} />
    {/* @ts-ignore */}
    <button on='tap:sidebar-left'>open</button>
    <header>
      <nav>
        <Link href='/'>
          <a>Home( full )</a>
        </Link>{' '}
        |{' '}
        <Link href='/amp-img'>
          <a>amp-img</a>
        </Link>{' '}
        |{' '}
        <Link href='/gdoc'>
          <a>amp-google-document-embed</a>
        </Link>{' '}
        |{' '}
        <Link href='/share'>
          <a>amp-social-share</a>
        </Link>{' '}
        |{' '}
        <Link href='/sns'>
          <a>amp-twitter ...</a>
        </Link>{' '}
        |{' '}
        <Link href='/hybrid'>
          <a>Hybrid AMP</a>
        </Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    <style jsx>{`
      main{
        width: 100%;
      }
    `}</style>
  </React.Fragment>
)

export default Layout
