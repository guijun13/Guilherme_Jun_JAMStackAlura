import React from 'react';
import ProjectsScreen from '../../src/components/screens/ProjectsScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

// eslint-disable-next-line react/prop-types
function Projects({ githubProjects }) {
  return (
    <>
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

export default websitePageHOC(Projects, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projetos',
    },
  },
});
