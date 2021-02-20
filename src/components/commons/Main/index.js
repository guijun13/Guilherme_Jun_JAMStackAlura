import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function Main() {
  return (
    <Grid.Container
      marginTop={{
        xs: '300px',
        md: '260px',
      }}
      height="50vh"
    >
      <Grid.Col
        value={{ md: 6, xs: 8 }}
        offset={{ md: 3, xs: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text textAlign="center" tag="h1" variant="titleh1">
          GUILHERME JUN
        </Text>
        <Text textAlign="center" tag="h3" variant="titleh3">
          Front-ender
        </Text>
      </Grid.Col>
    </Grid.Container>
  );
}
