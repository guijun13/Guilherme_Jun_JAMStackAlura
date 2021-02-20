import React from 'react';
import About from '../src/components/commons/About';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Main from '../src/components/commons/Main';
import Projects from '../src/components/commons/Projects';
import Box from '../src/components/foundation/layout/Box';

export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubble_green.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="top left"
    >
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage="url(/images/bubble_gray.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Header />
        <Main />
        <About />
        <Projects />
        <Footer />
      </Box>
    </Box>
  );
}
