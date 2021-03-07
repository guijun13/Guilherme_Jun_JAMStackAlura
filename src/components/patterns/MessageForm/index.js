import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

function MessageContent() {
  return (
    <form>
      <Text textAlign="center" variant="title" tag="h1" color="primary.main">
        Envie uma mensagem
      </Text>
    </form>
  );
}

export default function MessageForm({ modalProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Grid.Col
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      value={{ xs: 12, md: 6, lg: 8 }}
      offset={{ xs: 0, md: 3, lg: 2 }}
    >
      <Grid.Row>
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <MessageContent />
        </Box>
      </Grid.Row>
    </Grid.Col>
  );
}

MessageForm.propTypes = {
  modalProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
