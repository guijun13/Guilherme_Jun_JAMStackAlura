import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Box from '../../foundation/layout/Box';

export { getContent } from './getContent';

export default function AboutScreen({ messages }) {
  return (
    <>
      <Grid.Container height="100vh">
        <Grid.Row>
          <Text
            margin="50px 0"
            tag="h3"
            variant="titleh3"
            cmsKey="pageSobre.pageTitle"
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ lg: 4, md: 7, sm: 9 }} // ocupa colunas
            offset={{ lg: 0, md: 0, sm: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Image
              src="/images/profile.png"
              alt="img"
              width={254}
              height={300}
            />
          </Grid.Col>
          <Grid.Col
            value={{ lg: 8, md: 12, sm: 12 }} // ocupa colunas
            offset={{ lg: 0, md: 0, sm: 0 }} // desloca/pula colunas
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              margin="20px"
              tag="p"
              variant="titleh5"
              dangerouslySetInnerHTML={{
                __html: messages.pageSobre.pageDescription,
              }}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </>
  );
}

AboutScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};
