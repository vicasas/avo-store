import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // Use only if you need to do something from the server
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang='es'>
        <Head>
          {/* FavIcon */}
          {/* WebFont */}
          {/* StyleSheets */}
          {/* Scripts */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
