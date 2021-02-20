import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';
import Github from '../../../theme/Github';
import Linkedin from '../../../theme/Linkedin';
import Facebook from '../../../theme/Facebook';
import Instagram from '../../../theme/Instagram';

const socials = [
  {
    name: 'git',
    icon: <Github />,
    url: 'https://github.com/guijun13',
  },
  {
    name: 'link',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/guilherme-jun-grillo',
  },
  {
    name: 'face',
    icon: <Facebook />,
    url: 'https://facebook.com/guijun13',
  },
  {
    name: 'insta',
    icon: <Instagram />,
    url: 'https://instagram.com/guijun13',
  },
];

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`;

const SocialIcon = styled.a`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  padding: 20px;
  margin: 10px 15px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Text margin="20px" tag="h4" variant="titleh3">
        Contato
      </Text>
      <SocialWrapper>
        {socials.map(social => (
          <SocialIcon href={social.url} key={social.name}>
            {social.icon}
          </SocialIcon>
        ))}
      </SocialWrapper>
    </FooterWrapper>
  );
}
