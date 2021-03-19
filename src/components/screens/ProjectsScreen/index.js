/* eslint-disable react/prop-types */
import React from 'react';
import CardContainer from '../../../theme/utils/CardContainer';
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
        <CardContainer>
          <Grid.Row>
            <Text margin="20px" tag="h3" variant="titleh3">
              Projetos
            </Text>
          </Grid.Row>
          <Grid.Row>
            {githubProjects.map(project => (
              <Grid.Col
                key={project.full_name}
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
