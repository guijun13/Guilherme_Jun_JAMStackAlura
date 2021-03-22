/* eslint-disable react/prop-types */
import React from 'react';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import ProjectsScreenWrapper from './ProjectsScreenWrapper';

export default function ProjectsScreen({ githubProjects }) {
  return (
    <Box>
      <Grid.Container
        marginBottom={{
          xs: '40px',
          md: '130px',
        }}
      >
        <Grid.Row>
          <Text margin="50px 0" tag="h3" variant="titleh3">
            Projetos
          </Text>
        </Grid.Row>
        <Grid.Row>
          {githubProjects.map(project => (
            <Grid.Col
              key={project.full_name}
              value={{ lg: 6, md: 11, xs: 12 }} // ocupa colunas
              offset={{ lg: 0, md: 0, xs: 0 }} // desloca/pula colunas
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <ProjectsScreenWrapper project={project} />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
