import Head from 'next/head'

function Seo({ title }) {
  return (
    <Head>
      <title>Jorge Teixeira {title && ` | ${title}`}</title>
      <meta name="description" content="Jorge Teixeira" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimal-ui"
      />
    </Head>
  )
}

export default Seo
