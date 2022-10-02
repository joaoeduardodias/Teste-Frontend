import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="PontoGo, sistema para controle de ponto de seus colaboradores. Com o PontoGo seus
            colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma Dashboard intuitiva."
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
