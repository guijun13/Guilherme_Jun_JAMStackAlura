import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 14px;
  padding: 0 143px;
`;

HeaderWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
`;

HeaderWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;

export default HeaderWrapper;
