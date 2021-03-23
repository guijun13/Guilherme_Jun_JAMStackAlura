import React from 'react';
import styled from 'styled-components';
import get from 'lodash';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) =>
    color
      ? `color: ${get(theme, `colors.${color}.color`)}`
      : 'color: inherit;'};
  text-decoration: none;
  opacity: 1;
  /* border-bottom: 1px solid #66d0a1;
  box-shadow: inset 0 -5px 0 #66d0a1;
  transition: background 0.35s cubic-bezier(0.33, 0.66, 0.66, 1);
  &:hover,
  &:focus {
    background: #66d0a1;
  } */
  transition: color 0.35s;
  &:hover,
  &:focus {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary.main.color};
  }
`;

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
