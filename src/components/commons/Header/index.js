import React from 'react';
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
        <h1>Logo</h1>
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.RightSide>
        {links.map(link => (
          <li key={link.text}>
            <p>{link.text}</p>
          </li>
        ))}
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
