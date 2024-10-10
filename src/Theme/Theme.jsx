// src/theme/theme.js

import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    teal: {
      500: '#319795', // Primary Color
    },
    blue: {
      600: '#2B6CB0', // Secondary Color
    },
    orange: {
      400: '#DD6B20', // Accent Color
    },
    gray: {
      100: '#F7FAFC', // Background Color
      800: '#2D3748', // Text Color
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
    },
  },
});

export default customTheme;
