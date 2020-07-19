import { StyledContainer } from '@portfolio-ui/';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  border-top: 5px solid ${props => props.theme.primaryColor};
  display: none;

  @media ${props => props.theme.media.minTablet} {
    display: block;
    padding: 0.5rem 0;
    top: 0;
    left: 0;
    align-items: center;
    position: fixed;
    width: 100%;
    background: ${props => props.theme.navBg};
    transition: 0.2s ease-out;
    box-shadow: ${props => props.theme.shadowSmall};
    border-bottom: ${props => props.theme.navBorderBottom};
    z-index: 99;
  }
`;

export const NavContent = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabBarWrapper = styled.div`
  @media ${props => props.theme.media.minTablet} {
    display: none;
  }
  display: block;
`;
