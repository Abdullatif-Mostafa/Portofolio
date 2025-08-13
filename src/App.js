import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

// Modern theme with 2025 design trends and RTL support
const theme = extendTheme({
  direction: 'rtl',
  colors: {
    brand: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
    accent: {
      50: '#fff5f5',
      100: '#fed7d7',
      200: '#feb2b2',
      300: '#fc8181',
      400: '#f56565',
      500: '#e53e3e',
      600: '#c53030',
      700: '#9b2c2c',
      800: '#822727',
      900: '#63171b',
    },
    mocha: {
      50: '#faf8f5',
      100: '#f0ebe3',
      200: '#e6ddd1',
      300: '#d4c4b0',
      400: '#c2ab8f',
      500: '#a6926e', // Mocha Mousse - Pantone 2025
      600: '#8a7a5d',
      700: '#6e624c',
      800: '#524a3b',
      900: '#36322a',
    }
  },
  fonts: {
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
      '*': {
        scrollBehavior: 'smooth',
      }
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }
      },
      variants: {
        solid: {
          bg: 'mocha.500',
          color: 'white',
          _hover: {
            bg: 'mocha.600',
          }
        },
        outline: {
          borderColor: 'mocha.500',
          color: 'mocha.500',
          _hover: {
            bg: 'mocha.50',
          }
        }
      }
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }
        }
      }
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.50" dir="rtl">
        <Header />
        <Hero />
        <Box id="about" py={20}>
          <About />
        </Box>
        <Box id="projects" py={20} bg="white">
          <Projects />
        </Box>
        <Box id="skills" py={20}>
          <Skills />
        </Box>
        <Box id="contact" py={20} bg="white">
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
