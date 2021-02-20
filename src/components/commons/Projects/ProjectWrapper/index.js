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
export default function ProjectWrapper({ project }) {
  return (
    <ProjectCard>
      <img
        style={{ display: 'block', margin: 'auto', marginBottom: '20px' }}
        src={project.image}
        alt="img"
      />
      <Text marginBottom="20px" textAlign="center" tag="h5" variant="titleh5">
        {project.title}
      </Text>
      <Text margin="0 20px" tag="p" variant="smallest">
        {project.description}
      </Text>
      <LanguageContainer>
        {project.languages.map(lang => (
          <LanguageBox key={lang}>
            <Text textAlign="center" tag="p" variant="regular">
              {lang}
            </Text>
          </LanguageBox>
        ))}
      </LanguageContainer>
    </ProjectCard>
  );
}

ProjectWrapper.propTypes = {
  project: PropTypes.string.isRequired,
};
