import React from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import HeaderWrapper from './styles/HeaderWrapper';

const links = [
  {
    text: 'Sobre',
  },
  {
    text: 'Projetos',
  },
  {
    text: 'Contato',
  },
];

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide>
        {links.map(link => (
          <li key={link.text}>
            <Text tag="a" variant="regular">
              {link.text}
            </Text>
          </li>
        ))}
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
