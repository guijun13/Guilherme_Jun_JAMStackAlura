import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundation/Text';

export const ProjectCard = styled.div`
  border-radius: 10px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
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
`;

// eslint-disable-next-line react/prop-types
export default function ProjectsScreenWrapper({ project }) {
  return (
    <ProjectCard>
      <img
        style={{ display: 'block', margin: 'auto', marginBottom: '20px' }}
        src="https://placehold.it/300x150.png"
        alt="img"
      />
      <Text
        marginBottom="20px"
        textAlign="center"
        tag="h5"
        variant="titleh5"
        href={`/projects/${project.name}`}
      >
        /{project.name}
      </Text>
      <Text margin="0 20px" textAlign="center" tag="p" variant="small">
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
