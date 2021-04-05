import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Box from '../../foundation/layout/Box';
import Header from '../../commons/Header';
import SEO from '../../commons/SEO';
// import Menu from '../../commons/Menu';
// import Modal from '../../commons/Modal';
// import RegisterForm from '../../patterns/RegisterForm';

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  seoProps,
}) {
  return (
    <>
      <SEO {...seoProps} />
      <Box {...pageBoxProps}>
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  // menuProps: {
  //   display: true,
  // },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  // menuProps: PropTypes.shape({
  //   display: PropTypes.bool,
  // }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
