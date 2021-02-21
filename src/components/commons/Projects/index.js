import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import CardContainer from '../../../theme/utils/CardContainer';
import ProjectWrapper from './ProjectWrapper';

const projects = [
  {
    image: 'https://placehold.it/300x150.png',
    title: 'Titulo de um projeto',
    description:
      'Projeto de quiz criado durante a Imersão React Nextjs v2 por Alura',
    languages: ['Javascript', 'CSS'],
  },
  {
    image: 'https://placehold.it/300x150.png',
    title: 'Titulo de outro projeto',
    description:
      'Projeto de quiz criado durante a Imersão React Nextjs v2 por Alura',
    languages: ['Javascript'],
  },
];

export default function Projects() {
  return (
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
              <ProjectWrapper project={project} />
            </Grid.Col>
          ))}
        </Grid.Row>
      </CardContainer>
    </Grid.Container>
  );
}
