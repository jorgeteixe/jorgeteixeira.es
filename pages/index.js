import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Jorge Teixeira"/>
        <meta name="description" content="I make computers do useful things, currently at BizAway. Always learning new stuff, now in the degree in Computer Engineering at the University of A Coruña. Occasionally, I write and code for fun. Say hi! hi@jorgeteixeira.es"/>
        <meta name="robots" content="index,follow"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>jorgeteixeira.es</title>
      </Head>
      <div className="container">
        <p>Hello! My name is <span className="mention"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jorge-teixeira-crespo">@Jorge</a></span>.</p>
        <p>I make computers do useful things, currently at <a target="_blank" rel="noopener noreferrer" href="https://bizaway.com"><span>✈️</span> BizAway</a>. Always learning
            new stuff, now in the degree in <a target="_blank" rel="noopener noreferrer" href="https://estudos.udc.es/en/study/start//614G01V01/"><span>⚙️</span> Computer
                Engineering</a> at the <a target="_blank" rel="noopener noreferrer" href="https://udc.gal"><span>🎓</span> University of A Coruña</a>.</p>
        <p>Check out some of my <a target="_blank" rel="noopener noreferrer" href="https://github.com/jorgeteixe"><span>💻</span> code</a>.</p>
        <p>Say hi! <a href="mailto://hi@jorgeteixeira.es"><span>✉️</span> hi@jorgeteixeira.es</a></p>
      </div>
    </>
  )
}
