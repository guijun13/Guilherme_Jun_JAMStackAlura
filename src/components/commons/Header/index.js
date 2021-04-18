import React, { useContext } from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';
import HeaderWrapper from './styles/HeaderWrapper';

const links = [
  {
    text: 'Sobre',
    url: '/about',
  },
  {
    text: 'Projetos',
    url: '/projects',
  },
];

export default function Header() {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide>
        {links.map(link => (
          <li key={link.text}>
            <Text tag="a" variant="regular" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
        <Text
          id="message-button"
          tag="a"
          variant="regular"
          onClick={() => {
            websitePageContext.toggleRegisterModal();
          }}
        >
          Contato
        </Text>
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
