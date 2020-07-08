import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: ${p => (p.theme.dark ? p.theme.primaryColor : p.theme.primaryColor)};
  min-height: 2rem;
  padding: 3rem 0;
  text-align: center;
`;
