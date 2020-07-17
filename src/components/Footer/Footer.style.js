import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: ${p => p.theme.primaryText};
  padding: 2rem 0;
  text-align: center;

  [data-icon='GitHub'] svg {
    fill: ${p => p.theme.primaryBlack};
  }
`;
