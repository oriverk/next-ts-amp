import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import blogConfig from '../../blog.config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}