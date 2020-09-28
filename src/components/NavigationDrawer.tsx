import React from 'react'
import Link from 'next/link'

export const config = {
  amp: true
}

export function NavigationDrawer({ isAmp }: {
  isAmp: boolean
}) {
  return (
    <React.Fragment>
      {isAmp && (
        <amp-sidebar id='sidebar-left' class='sample-sidebar' layout='nodisplay' side='left'>
          <h3>Sidebar</h3>
          {/* @ts-ignore */}
          <nav toolbar='(min-width: 784px)' toolbar-target='target-element-left'>
            <ul>
              <li>
                <Link href='/'><a>Home</a></Link>
              </li>
              <li>
                <Link href='/'><a>amp-sides</a></Link>
              </li>
              <li>
                <Link href='/'><a>amp-imgs</a></Link>
              </li>
              <li>
                <Link href='/'><a>amp-sns</a></Link>
              </li>
              <li>
                <Link href='/'><a>amp-share</a></Link>
              </li>
              <li>
                <Link href='/'><a>amp-google-document-embed</a></Link>
              </li>
              <li>
                <Link href='/'><a>amp-gist</a></Link>
              </li>
              <li>
                <Link href='/'><a>hybrid amp page</a></Link>
              </li>
            </ul>
          </nav>
        </amp-sidebar>
      )}
    </React.Fragment>
  )
}