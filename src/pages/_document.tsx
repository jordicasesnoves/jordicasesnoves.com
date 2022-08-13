// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend

import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import * as snippet from '@segment/snippet'

const {
  // This write key is associated with https://segment.com/nextjs-example/sources/nextjs.
  ANALYTICS_WRITE_KEY = 'ZQaxiYXR6rHRM8nnNA7gbl3MpxR3PFJL',
  NODE_ENV = 'development'
} = process.env

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp:
            (App: any) =>
            (props: any): JSX.Element =>
              sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  renderSnippet(): any {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true
    }

    if (NODE_ENV === 'development') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href={`/jordi.png`}
            sizes="64x64"
          />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
          <meta
            name="google-site-verification"
            content="gobkTrBXRIvtUlBPaZVUYaz7nL2J-bIcXksFLYhle1s"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
