import React from 'react';
import Head from 'next/head';
// import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/index';
import GlobalStyle from '../src/theme/GlobalStyle';
import SEO from '../src/components/commons/SEO';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SEO headTitle="Home" />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// App.propTypes = {
//   Component: PropTypes.func.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
