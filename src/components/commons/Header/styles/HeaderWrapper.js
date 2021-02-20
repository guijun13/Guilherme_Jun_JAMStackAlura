import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

const HeaderWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 14px;
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 14px 100px;
    `,
    lg: css`
      width: 100%;
      padding: 14px 100px;
    `,
    xl: css`
      width: 100%;
      padding: 14px 100px;
    `,
  })}
`;

HeaderWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

HeaderWrapper.RightSide = styled.div`
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-evenly;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    cursor: pointer;
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.small}
      `,
      md: css`
        ${TextStyleVariantsMap.regular}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.primary.main.color};
    }
  }
`;

export default HeaderWrapper;
