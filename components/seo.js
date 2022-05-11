import Head from 'next/head'

function Seo({ title }) {
  return (
    <Head>
      <title>Jorge Teixeira {title && ` | ${title}`}</title>
      <meta name="description" content="Jorge Teixeira" />
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
