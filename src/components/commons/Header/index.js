import React, { useState } from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import MessageForm from '../../patterns/MessageForm';
import Modal from '../Modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {modalProps => <MessageForm modalProps={modalProps} />}
      </Modal>
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
            setIsModalOpen(!isModalOpen);
          }}
        >
          Contato
        </Text>
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
