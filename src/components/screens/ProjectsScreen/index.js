import React from 'react';
import CardContainer from '../../../theme/utils/CardContainer';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import ProjectsScreenWrapper from './ProjectsScreenWrapper';

const projects = [
  {
    image: 'https://placehold.it/300x150.png',
    url: 'https://github.com/guijun13/instadev',
    title: '/instadev',
    description: 'Projeto principal do Bootcamp Front-End JAMStack da Alura',
    languages: ['Javascript', 'Next.js'],
  },
  {
    image: 'https://placehold.it/300x150.png',
    url: 'https://github.com/guijun13/ux-quiz',
    title: '/ux-quiz',
    description:
      'Projeto de quiz criado durante a Imersão React Nextjs v2 por Alura',
    languages: ['Javascript', 'Next.js'],
  },
  {
    image: 'https://placehold.it/300x150.png',
    url: 'https://github.com/guijun13/guijunflix',
    title: '/guijunflix',
    description: 'Projeto da ImersãoReact da Alura',
    languages: ['Javascript', 'CSS'],
  },
  {
    image: 'https://placehold.it/300x150.png',
    url: 'https://github.com/guijun13/CacheSite',
    title: '/CacheSite',
    description:
      'Site estático sobre memória cache: definição e funções de mapeamento',
    languages: ['Javascript'],
  },
];

export default function ProjectsScreen() {
  return (
    <Box>
      <Grid.Container
        marginBottom={{
          xs: '40px',
          md: '130px',
        }}
      >
        <CardContainer>
          <Grid.Row>
            <Text margin="20px" tag="h3" variant="titleh3">
              Projetos
            </Text>
          </Grid.Row>
          <Grid.Row>
            {projects.map(project => (
              <Grid.Col
                key={project.title}
                value={{ md: 6, xs: 12 }} // ocupa colunas
                offset={{ md: 0, xs: 0 }} // desloca/pula colunas
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <ProjectsScreenWrapper project={project} />
              </Grid.Col>
            ))}
          </Grid.Row>
        </CardContainer>
      </Grid.Container>
    </Box>
  );
}
