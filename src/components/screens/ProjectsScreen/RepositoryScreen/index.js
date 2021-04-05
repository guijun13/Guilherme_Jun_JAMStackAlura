import React from 'react';
import Box from '../../../foundation/layout/Box';
import Grid from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';

// eslint-disable-next-line react/prop-types
export default function RespositoryScreen({ repoName, repoDescription }) {
  return (
    <>
      <Grid.Container height="100vh">
        <Box display="flex" flexDirection="column" padding="100px">
          <Text tag="h1" variant="titleh1" textAlign="center">
            {repoName}
          </Text>
          <Text tag="p" variant="regular" textAlign="center">
            {repoDescription}
          </Text>
        </Box>
      </Grid.Container>
    </>
  );
}
