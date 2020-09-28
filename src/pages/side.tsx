import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpSidebar() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      {/* <amp-sidebar id="sidebar-left"
        class="sample-sidebar"
        layout="nodisplay"
        side="left">
        <h3>Sidebar</h3>
        @ts-ignore
        <button on="tap:sidebar-left.close">Close sidebar</button>
        @ts-ignore
        <nav toolbar="(min-width: 784px)"
          toolbar-target="target-element-left">
          <ul>
            <li>Nav item 1</li>
            <li>Nav item 2</li>
          </ul>
        </nav>
        <ul>
          <li>Nav item 3</li>
          <li>Nav item 4</li>
        </ul>
      </amp-sidebar> */}
      <Layout isAmp={isAmp}>
        <div className='content'>
          {/* @ts-ignore */}
          <button on="tap:sidebar-left.toggle">Toggle sidebar</button>
          <div id="target-element-left">
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}