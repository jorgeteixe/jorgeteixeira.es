import Head from 'next/head'

function Seo({ title }) {
  return (
    <Head>
      <title>
        Jorge Teixeira |{' '}
        {title || 'Creator. Mentor. Tech advocate based in Galicia.'}
      </title>
      <meta
        name="description"
        content="Using technology to build great things. Enjoy helping others do the same. Never stop learning. Never stop teaching."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jorgeteixeira.es/" />
      <meta
        property="og:title"
        content="Jorge Teixeira — Creator. Mentor. Tech advocate based in Galicia."
      />
      <meta
        property="og:description"
        content="Using technology to build great things. Enjoy helping others do the same. Never stop learning. Never stop teaching."
      />
      <meta property="og:image" content="/open-graph-image.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jorgeteixeira.es/" />
      <meta
        property="twitter:title"
        content="Jorge Teixeira — Creator. Mentor. Tech advocate based in Galicia."
      />
      <meta
        property="twitter:description"
        content="Using technology to build great things. Enjoy helping others do the same. Never stop learning. Never stop teaching."
      />
      <meta property="twitter:image" content="/open-graph-image.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimal-ui"
      />
    </Head>
  )
}

export default Seo
