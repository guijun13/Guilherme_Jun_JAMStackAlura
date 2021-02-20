import styled from 'styled-components';

const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  /* padding: 40px; */
`;

export default AboutWrapper;
