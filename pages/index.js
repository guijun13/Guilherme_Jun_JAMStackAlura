import React from 'react';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Main from '../src/components/commons/Main';
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
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}
