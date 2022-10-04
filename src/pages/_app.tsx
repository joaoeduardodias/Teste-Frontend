import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { MenuDrawerProvider } from '../contexts/MenuDrawerContext'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <Component {...pageProps} />
      </MenuDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
