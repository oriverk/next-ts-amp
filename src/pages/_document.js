// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { existsGaId, GA_TRACKING_ID } from '../lib/gtag'
import blogConfig from '../../blog.config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    // const isAmp = useAmp()
    return (
      <Html lang='en'>
        <Head>
          <meta name='theme-color' content={blogConfig.themeColor} />
          <meta content='developer, ruby, react' name='keywords' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={blogConfig.baseName} />
          <meta property='og:locale' content={blogConfig.lang} />
          <meta content='summary_large_image' name='twitter:card' />
          <meta content={blogConfig.sns.twitter} name='twitter:site' />
          {/* <link rel='manifest' crossOrigin="use-credentials" href='./manifest.json' />
          <link rel="alternate" type="application/rss+xml" title={blogConfig.baseName} href="./rss.xml" />
          <link rel="alternate" type="application/atom+xml" title={blogConfig.baseName} href="./atom.xml" />
          <link rel="alternate" type="application/rss+xml" title={blogConfig.baseName} href="./sitemap.xml" /> */}
        </Head>
        <body>
          <amp-analytics type="gtag" data-credentials="include">
            <script type="application/json" dangerouslySetInnerHTML={{
              __html: `{
              "vars": {
                "gtag_id": "UA-131793403-6",
                "config" : {
                  "UA-131793403-6": {
                    "groups": "default",
                    "site_speed_sample_rate": 100
                  }
                }
              }
            }`}} />
          </amp-analytics>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}