import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
  color: ${props => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  background-color: ${props =>
    get(props.theme, `colors.${props.variant}.color`)};
  color: ${props => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 12px;

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.small}
    `,
    md: css`
      ${TextStyleVariantsMap.titleh5}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${propToStyle('margin')}
  ${propToStyle('flex')}
`;

export default function Button({ href, children, ...props }) {
  const hasHref = Boolean(href); // verifica se href é booleano
  const tag = hasHref ? Link : 'button';
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
