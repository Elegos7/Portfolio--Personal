// src/theme.ts
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#e60000',    // tu rojo personalizado
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
})
