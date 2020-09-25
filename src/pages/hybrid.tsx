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
        <h1>Hello Next.js 👋</h1>
        <h2>This is hybrid amp page</h2>
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
      </Layout>
    </React.Fragment>
  )
}