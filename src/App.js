import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Box>
      <Header />
      <Box id="about" mt={10}>
        <About />
      </Box>
      <Box id="projects" mt={10}>
        <Projects />
      </Box>
      <Box id="skills" mt={10}>
        <Skills />
      </Box>
      <Box id="contact" mt={10}>
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
