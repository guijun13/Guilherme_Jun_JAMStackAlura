import React from 'react';
import Image from 'next/image';
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
            value={{ lg: 4, md: 7, sm: 9 }} // ocupa colunas
            offset={{ lg: 0, md: 0, sm: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Image
              src="/images/profile.png"
              alt="img"
              width={254}
              height={300}
            />
          </Grid.Col>
          <Grid.Col
            value={{ lg: 8, md: 12, sm: 12 }} // ocupa colunas
            offset={{ lg: 0, md: 0, sm: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text margin="20px" tag="p" variant="titleh5">
              Sou Guilherme Jun, estudante de Ciências de Computação na USP -
              campus São Carlos. Sou da empresa júnior do meu instituto, a{' '}
              <Text
                tag="p"
                variant="titleh5"
                href="https://icmcjunior.com.br"
                target="_blank"
              >
                ICMC Júnior
              </Text>
              , onde faço parte do núcleo de Projetos de Computação desde
              Out/2019.
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
