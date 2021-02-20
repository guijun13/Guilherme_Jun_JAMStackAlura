import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import AboutWrapper from './styles/AboutWrapper';

export default function About() {
  return (
    <Grid.Container
      marginBottom={{
        xs: '40px',
        md: '130px',
      }}
    >
      <AboutWrapper>
        <Grid.Row>
          <Text tag="h3" variant="titleh3">
            Sobre mim
          </Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ md: 4, xs: 8 }} // ocupa colunas
            offset={{ md: 1, xs: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="/images/profile.png"
              alt="img"
            />
          </Grid.Col>
          <Grid.Col
            value={{ md: 6, xs: 12 }} // ocupa colunas
            offset={{ md: 0.5, xs: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text tag="p" variant="titleh5">
              Sou Guilherme Jun, estudante de Ciências de Computação na USP
              campus São Carlos. Atualmente estou estudando Front-End web e
              mobile com HTML, CSS, JS, React e React Native, realizando o
              Bootcamp Front-end JAMStack da Alura.Tenho interesse também na
              área de interface do usuário, UX/UI Design.
            </Text>
          </Grid.Col>
        </Grid.Row>
      </AboutWrapper>
    </Grid.Container>
  );
}
