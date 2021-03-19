import React from 'react';
import Header from '../../src/components/commons/Header';
import ProjectsScreen from '../../src/components/screens/ProjectsScreen';

// eslint-disable-next-line react/prop-types
export default function Projects({ githubProjects }) {
  return (
    <>
      <Header />
      <ProjectsScreen githubProjects={githubProjects} />
    </>
  );
}

export async function getStaticProps() {
  const githubProjects = await fetch(
    'https://api.github.com/users/guijun13/repos'
  ).then(serverResponse => serverResponse.json());

  return {
    props: {
      githubProjects,
    },
  };
}
