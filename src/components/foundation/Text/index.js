import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';

export const TextStyleVariantsMap = {
  titleh1: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleh1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleh1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleh1.lineHeight};
  `,
  titleh2: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleh2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleh2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleh2.lineHeight};
  `,
  titleh3: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleh3.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleh3.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleh3.lineHeight};
  `,
  titleh4: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleh4.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleh4.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleh4.lineHeight};
  `,
  titleh5: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleh5.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleh5.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleh5.lineHeight};
  `,
  regular: css`
    font-size: ${({ theme }) => theme.typographyVariants.regular.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.regular.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.regular.lineHeight};
  `,
  small: css`
    font-size: ${({ theme }) => theme.typographyVariants.small.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.small.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.small.lineHeight};
  `,
  smallest: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallest.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallest.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallest.lineHeight};
  `,
};

const TextBase = styled.span`
  ${props => TextStyleVariantsMap[props.variant]};
  color: ${props => get(props.theme, `colors.${props.color}.contrastText`)};
  margin: 0;
  ${propToStyle('textAlign')};
  ${propToStyle('marginBottom')};
  ${propToStyle('margin')};
  ${propToStyle('padding')};
  ${propToStyle('wordWrap')};
  ${propToStyle('width')};
`;

export default function Text({ tag, variant, children, href, ...props }) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'regular',
  href: '',
};
