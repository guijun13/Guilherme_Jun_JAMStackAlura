import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Player } from '@lottiefiles/react-lottie-player';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import loadingAnimation from './animations/loading.json';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import Button from '../../commons/Button';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function MessageContent() {
  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo, // mantem as outras infos do objeto
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid =
    userInfo.name.length === 0 || userInfo.email.length === 0;

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault(); // previne o evento padrao do <form />, que é action="/api/..."

          setSubmissionStatus(formStates.LOADING);
          setIsMessageSubmitted(true);

          // Data Transfer Object
          const userDTO = {
            name: userInfo.name,
            email: userInfo.email,
            message: userInfo.message,
          };

          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
            .then(serverResponse => {
              if (serverResponse.ok) {
                return serverResponse.json();
              }

              throw new Error('Não foi possível cadastrar um novo usuário :c');
            })
            .then(serverResponseObject => {
              setSubmissionStatus(formStates.DONE);
              console.log(serverResponseObject);
            })
            .catch(error => {
              setSubmissionStatus(formStates.ERROR);
              console.error(error);
            });
        }}
      >
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
            value={userInfo.name}
            onChange={handleChange}
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
            value={userInfo.email}
            onChange={handleChange}
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
            value={userInfo.message}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          disabled={isFormInvalid || isMessageSubmitted}
          variant="primary.main"
          fullWidth
        >
          {!isMessageSubmitted && submissionStatus === formStates.DEFAULT && (
            <>Enviar</>
          )}
          {isMessageSubmitted && submissionStatus === formStates.LOADING && (
            <>
              <Player
                autoplay
                loop
                src={loadingAnimation}
                style={{ height: '100px', width: '100px' }}
              />
            </>
          )}
          {isMessageSubmitted && submissionStatus === formStates.DONE && (
            <>
              <Player
                autoplay
                loop
                src={successAnimation}
                style={{ height: '100px', width: '100px' }}
              />
            </>
          )}
          {isMessageSubmitted && submissionStatus === formStates.ERROR && (
            <>
              <Player
                autoplay
                loop
                src={errorAnimation}
                style={{ height: '100px', width: '100px' }}
              />
            </>
          )}
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
