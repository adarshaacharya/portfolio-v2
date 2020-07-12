import styled from 'styled-components';

export const PageTitle = styled.h2`
  margin: 50px auto;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: normal;
  color: ${p => (p.theme.dark ? p.theme.primaryText : p.theme.secondaryText)};
  font-family: 'Inter', sans-serif;
  text-align: ${p => (p.center ? 'center' : 'left')};
  line-height: 45px;
  letter-spacing: 1px;
`;
