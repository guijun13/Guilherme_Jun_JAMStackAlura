import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import Button from '../../commons/Button';

function MessageContent() {
  return (
    <>
      <form>
        <Text
          marginBottom="20px"
          textAlign="center"
          variant="title"
          tag="h1"
          color="primary.main"
        >
          Envie uma mensagem
        </Text>
        <div>
          <Text
            marginBottom="5px"
            variant="regular"
            tag="p"
            color="primary.main"
          >
            Nome
          </Text>
          <TextField
            placeholder="Nome"
            name="name"
            // value={userInfo.name}
            // onChange={handleChange}
          />
        </div>
        <div>
          <Text
            marginBottom="5px"
            variant="regular"
            tag="p"
            color="primary.main"
          >
            Email
          </Text>
          <TextField
            placeholder="Email"
            name="email"
            // value={userInfo.name}
            // onChange={handleChange}
          />
        </div>
        <div>
          <Text
            marginBottom="5px"
            variant="regular"
            tag="p"
            color="primary.main"
          >
            Mensagem
          </Text>
          <textarea
            placeholder="Mensagem"
            name="message"
            rows="7"
            style={{
              resize: 'none',
              width: '100%',
              border: '3px solid #66D0A1',
              padding: '12px 16px',
              outline: 0,
              borderRadius: '12px',
              marginBottom: '20px',
            }}
            // value={userInfo.name}
            // onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          // disabled={isFormInvalid}
          variant="primary.main"
          fullWidth
        >
          Enviar
        </Button>
      </form>
    </>
  );
}

export default function MessageForm({ modalProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Grid.Col
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      value={{ xs: 12, md: 10, lg: 8 }}
      offset={{ xs: 0, md: 1, lg: 2 }}
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
            md: '65px',
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
