import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Portfolio do Jun';
  const title = hasHeadTitle ? `${baseTitle} | ${headTitle}` : baseTitle;
  const description = 'Descrição do portfolio do Jun';
  const image =
    'https://repository-images.githubusercontent.com/340092064/bd80ac80-8a77-11eb-85c2-982d22e507ca';
  const baseURL = 'https://portfolio-guijun13.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
