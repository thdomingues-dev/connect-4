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
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: 'regular',
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Ubuntu', sans-serif`,
      },
      a: {
        fontFamily: `'Ubuntu', sans-serif`,
      },
    },
  },
})
