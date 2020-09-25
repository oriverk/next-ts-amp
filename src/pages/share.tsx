import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { useAmp } from 'next/amp'

export const config = {
  amp: true
}

export default function AmpSocialShare() {
  const isAmp = useAmp()
  return (
    <React.Fragment>
      <Layout isAmp={isAmp}>
        <div className='content'>
          <div className='share1'>
            <amp-social-share type='email' aria-label='Share by email'></amp-social-share>
            <amp-social-share type='facebook' aria-label='Share on Facebook' data-param-app_id='254325784911610'></amp-social-share>
            <amp-social-share type='linkedin' aria-label='Share on LinkedIn'></amp-social-share>
            <amp-social-share type='pinterest' aria-label='Share on Pinterest' data-param-media='https://amp.dev/static/samples/img/amp.jpg'></amp-social-share>
            <amp-social-share type='tumblr' aria-label='Share on Tumblr'></amp-social-share>
            <amp-social-share type='twitter' aria-label='Share on Twitter' data-param-url='https://next-ts-amp.oriverk.dev/share' data-param-text='tweeted from amp-social-share #nextjs #typescript #amp'></amp-social-share>
            <amp-social-share type='whatsapp' aria-label='Share on WhatsApp'></amp-social-share>
            <amp-social-share type='line' aria-label='Share on Line'></amp-social-share>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .rounded {
          border-radius: 50%;
        }
      `}</style>
    </React.Fragment>
  )
}