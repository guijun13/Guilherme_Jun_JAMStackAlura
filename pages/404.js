import React from 'react';
import styled from 'styled-components';
import Text from '../src/components/foundation/Text';

const ErrorContainer = styled.div`
  margin: 50px;
`;

export default function Sobre() {
  return (
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
  );
}
