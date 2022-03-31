import { extendTheme, Theme } from '@chakra-ui/react'

const customTheme: Partial<Theme> = {
  config: {
    initialColorMode: 'light',
  },
}

export const theme = extendTheme(customTheme)
