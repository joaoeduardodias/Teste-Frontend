import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    purple: {
      '800': '#120039',
      '700': '#330693',
      '400': '#8A53FF',
    },
    gray: {
      '600': '#20292E',
    },
  },
  styles: {
    global: {
      body: {
        bgColor: 'purple.800',
        bgImage: 'url(/background.png)',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',

        color: 'white',
      },
    },
  },
})
