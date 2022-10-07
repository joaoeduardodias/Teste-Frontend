import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { MenuDrawerProvider } from '../contexts/Landing/MenuDrawerContext'
import { client } from '../lib/apollo'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <MenuDrawerProvider>
          <Component {...pageProps} />
        </MenuDrawerProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
