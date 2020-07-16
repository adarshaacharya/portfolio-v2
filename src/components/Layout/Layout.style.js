import { StyledContainer } from '@portfolio-ui/';
import styled from 'styled-components';

export const LayoutWrapper = styled(StyledContainer)`
  margin-top: 130px;
  margin-bottom: 20px;
  padding: 0 1em;
  min-height: calc(100vh - 125px);

@media ${props => props.theme.media.tablet} {
  margin-top : 0px;
}
`;
