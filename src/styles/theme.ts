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
      '400': '#00000014',
      '600': '#20292E',
    },
  },
  styles: {
    global: {
      body: {
        bgColor: 'purple.800',
        bgImage: 'url(/background.png)',

        color: 'white',
      },
      '*::-webkit-scrollbar': {
        w: '10px',
        // h: '5px',
      },
      '*::-webkit-scrollbar-thumb': {
        bg: 'purple.400',
        rounded: 'md',
      },
      '*::-webkit-scrollbar-track': {
        bg: 'purple.700',
      },
    },
  },
})
