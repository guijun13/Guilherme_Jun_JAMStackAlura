import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function Main() {
  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
      height="100vh"
    >
      <Grid.Col
        value={{ md: 6, xs: 8 }}
        offset={{ md: 3, xs: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text tag="h1" variant="titleh1">
          GUILHERME JUN
        </Text>
        <Text tag="h3" variant="titleh3">
          Portfolio
        </Text>
      </Grid.Col>
    </Grid.Container>
  );
}
