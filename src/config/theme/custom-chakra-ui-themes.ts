import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        fontFamily: `'Ubuntu', sans-serif`,
      },
    }
  }
});
