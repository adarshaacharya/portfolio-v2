import { StyledContainer } from '@src/@portfolio-ui';
import styled from 'styled-components';

export const FooterWrapper = styled(StyledContainer)`
  border-top: 1px solid ${p => p.theme.hrColor};
  color: ${p => p.theme.primaryText};
  padding: 2rem 0;
  text-align: center;

  @media ${props => props.theme.media.tablet} {
    border-top: none;
  }
`;
