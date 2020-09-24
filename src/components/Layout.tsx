import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  isAmp?: boolean
}

const Layout = ({ children, title = 'This is the default title', isAmp }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {!isAmp && (
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      )}
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Full AMP</a>
        </Link>{' '}
        |{' '}
        <Link href="/hybrid">
          <a>Hybrid AMP</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
