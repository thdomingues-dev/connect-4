import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'regular',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: `'Ubuntu', sans-serif`,
        fontWeight: 'regular',
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Poppins', sans-serif`,
      },
      a: {
        fontFamily: `'Poppins', sans-serif`,
      },
    },
  },
})
