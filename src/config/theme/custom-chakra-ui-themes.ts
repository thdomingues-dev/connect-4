import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Ubuntu', sans-serif`,
        fontWeight: 'normal',
      },
      a: {
        fontFamily: `'Ubuntu', sans-serif`,
        fontWeight: 'normal',
      }
    },
  },
});
