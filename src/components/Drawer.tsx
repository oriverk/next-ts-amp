import React from 'react'
import Link from 'next/link'

export const config = {
  amp: true
}

type Props = {
  isAmp: boolean
}

export function LeftDrawer({ isAmp }: Props ) {
  return (
    <>
      {isAmp && (
        <amp-sidebar id='sidebar-left' className='sample-sidebar' layout='nodisplay' side='left'>
          <h3>amp-sidebar</h3>
          <nav>
            <ul>
              <li>
                <Link href='/'><a>Home</a></Link>
              </li>
              <li>
                <Link href='/search-demo'><a>search-algolia-demo</a></Link>
              </li>
              <li>
                <Link href='/search-mine'><a>search-my-algolia</a></Link>
              </li>
              <li>
                <Link href='/amp-sidebar'><a>amp-sidebar</a></Link>
              </li>
              <li>
                <Link href='/amp-accordion'><a>amp-accordion</a></Link>
              </li>
              <li>
                <Link href='/images'><a>amp-imgs</a></Link>
              </li>
              <li>
                <Link href='/amp-sns'><a>amp-sns</a></Link>
              </li>
              <li>
                <Link href='/amp-share'><a>amp-share</a></Link>
              </li>
              <li>
                <Link href='/google-doc'><a>amp-google-document-embed</a></Link>
              </li>
              <li>
                <Link href='/amp-gist'><a>amp-gist</a></Link>
              </li>
              <li>
                <Link href='/404'><a>404</a></Link>
              </li>
              <li>
                <Link href='/hybrid'><a>hybrid amp page</a></Link>
              </li>
            </ul>
          </nav>
        </amp-sidebar>
      )}
      <style jsx>{`
        amp-sidebar {
          background-color: #333;
          color: #EEE;
          padding: 1rem;
        }
        ul {
          padding-left: 1.5rem;
        }
        li {
          list-style: none;
        }
        a {
          color: #50CAF9;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}