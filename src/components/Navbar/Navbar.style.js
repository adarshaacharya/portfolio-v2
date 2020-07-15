import { StyledContainer } from '@portfolio-ui/';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  padding: 0.5rem 0;
  top: 0;
  left: 0;
  align-items: center;
  position: fixed;
  width: 100%;

  background-color: ${props => props.theme.bg};
  box-shadow: ${props => props.theme.shadowSmall};
  border-bottom: ${props => props.theme.navBorderBottom};
  border-top: 5px solid ${props => props.theme.primaryColor};

  z-index: 99;    
  transition: 0.2s ease-out;

  .logo {
    margin-right: auto;
    cursor: pointer;
  }

  @media ${props => props.theme.media.tablet} {
    display: none;
  }
`;

export const NavContent = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
