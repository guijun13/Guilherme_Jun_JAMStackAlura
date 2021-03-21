import React from 'react';
import RespositoryScreen from '../../src/components/screens/ProjectsScreen/RepositoryScreen';

// eslint-disable-next-line react/prop-types
export default function ProjectsRepoScreen({ repoName, repoDescription }) {
  console.log(repoName);
  console.log(repoDescription);
  return (
    <RespositoryScreen repoName={repoName} repoDescription={repoDescription} />
  );
}

export async function getStaticProps({ params }) {
  const githubProjects = await fetch(
    'https://api.github.com/users/guijun13/repos'
  ).then(async serverResponse => {
    const response = await serverResponse.json();
    return response;
  });

  const pageData = githubProjects.find(repository => {
    if (repository.name === params.slug) {
      return true;
    }
    return false;
  });

  return {
    props: {
      repoName: pageData.name,
      repoDescription: pageData.description,
    },
  };
}

export async function getStaticPaths() {
  const githubProjects = await fetch(
    'https://api.github.com/users/guijun13/repos'
  ).then(async serverResponse => {
    const response = await serverResponse.json();
    return response;
  });

  const paths = githubProjects.map(repository => {
    const repoSlug = repository.name;
    return { params: { slug: repoSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}
