import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Footer from '../../commons/Footer';
import Box from '../../foundation/layout/Box';
import Header from '../../commons/Header';
import SEO from '../../commons/SEO';

import { WebsitePageContext } from './context';
import Modal from '../../commons/Modal';
import MessageForm from '../../patterns/MessageForm';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  seoProps,
  messages,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleRegisterModal: () => {
          setIsModalOpen(!isModalOpen);
        },
        getCMSContent: cmsKey => get(messages, cmsKey),
      }}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SEO {...seoProps} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Box {...pageBoxProps}>
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          {modalProps => <MessageForm modalProps={modalProps} />}
        </Modal>
        <Header />
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  messages: {},
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
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
