import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/commons/Header';
import Text from '../src/components/foundation/Text';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

const ErrorContainer = styled.div`
  margin-top: 50px;
  height: 100vh;
`;

function Pag404() {
  return (
    <>
      <ErrorContainer>
        <Text
          variant="titleh1"
          tag="h1"
          color="primary.main"
          textAlign="center"
          marginBottom="50px"
        >
          Erro 404
        </Text>
        <Text
          variant="regular"
          tag="p"
          color="tertiary.light"
          textAlign="center"
          marginBottom="10px"
        >
          Essa página não existe
        </Text>
        <Text
          variant="regular"
          tag="p"
          color="tertiary.light"
          href="/"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Voltar para home
        </Text>
      </ErrorContainer>
    </>
  );
}

export default websitePageHOC(Pag404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});
