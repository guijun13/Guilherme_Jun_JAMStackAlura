import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundation/Text';

export const ProjectCard = styled.a`
  text-decoration: none;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-radius: 15px;
  border: solid 5px rgba(102, 208, 161, 1);
  color: ${({ theme }) => theme.colors.primary.main.contrastText};

  top: 0;
  left: 0;
  transition: all 0.15s linear 0s;
  position: relative;
  display: inline-block;

  &:hover {
    top: 3px;
    left: -3px;
    box-shadow: -10px 10px 0 ${({ theme }) => theme.colors.primary.main.color};
  }
`;

export const LanguageContainer = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const LanguageBox = styled.div`
  border-radius: 20px;
  padding: 10px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

// eslint-disable-next-line react/prop-types
export default function ProjectsScreenWrapper({ project }) {
  return (
    <ProjectCard href={`/projects/${project.name}`}>
      {/* <img
        style={{ display: 'block', margin: 'auto', marginBottom: '20px' }}
        src="https://placehold.it/300x150.png"
        alt="img"
      /> */}
      <Text
        width="300px"
        margin="20px 0px"
        textAlign="center"
        padding="0 10px"
        wordWrap="break-word"
        tag="h5"
        variant="titleh5"
      >
        /{project.name}
      </Text>
      <Text
        width="300px"
        margin="0px"
        textAlign="center"
        padding="0 10px"
        wordWrap="break-word"
        tag="p"
        variant="small"
      >
        {project.description != null
          ? project.description
          : 'Repo sem descrição'}
      </Text>
      <LanguageContainer>
        <LanguageBox>
          <Text textAlign="center" tag="p" variant="regular">
            {project.language != null ? project.language : '?'}
          </Text>
        </LanguageBox>
      </LanguageContainer>
    </ProjectCard>
  );
}

ProjectsScreenWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object.isRequired,
};
