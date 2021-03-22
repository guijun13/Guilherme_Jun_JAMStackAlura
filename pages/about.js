import React from 'react';
import Header from '../src/components/commons/Header';
import Grid from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';

export default function About() {
  return (
    <>
      <Header />
      <Grid.Container
        marginBottom={{
          xs: '40px',
          md: '50px',
        }}
      >
        <Grid.Row>
          <Text margin="50px 0" tag="h3" variant="titleh3">
            Sobre mim
          </Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ lg: 4, md: 10, xs: 12 }} // ocupa colunas
            offset={{ lg: 0, md: 0, xs: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <img
              style={{
                display: 'block',
                margin: 'auto',
                marginBottom: '20px',
                border: 'solid 7px #66D0A1',
                borderRadius: '50%',
              }}
              src="/images/profile.png"
              alt="img"
            />
          </Grid.Col>
          <Grid.Col
            value={{ md: 12, xs: 12 }} // ocupa colunas
            offset={{ md: 0, xs: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text margin="20px" tag="p" variant="titleh5">
              Sou Guilherme Jun, estudante de Ciências de Computação na USP -
              campus São Carlos. Faço parte da empresa júnior do meu instituto,
              a ICMC Júnior, onde faço parte do núcleo de Projetos de Computação
              desde Out/2019.
              <br />
              <br />
              Atualmente estou estudando Front-End web e mobile com HTML, CSS,
              JS, React e React Native, realizando o Bootcamp Front-end JAMStack
              da Alura.
              <br />
              <br />
              Tenho interesse também na área de interface do usuário, UX/UI
              Design.
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </>
  );
}
