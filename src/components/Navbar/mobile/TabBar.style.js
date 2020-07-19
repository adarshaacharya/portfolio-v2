import styled from 'styled-components';
import { Link } from 'gatsby';

export const TabItems = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 999;
  left: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  margin: 0;
  border-top: 1px solid ${props => props.theme.primaryColor};
  background: ${props => props.theme.navBg};
`;

export const TabItem = styled(Link)`
  padding: 1rem 0 1.5rem 0;
  color: ${props => props.theme.primaryBlack};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${props => props.theme.primaryText};
  }

  &.active {
    border-top: 2px solid ${props => props.theme.primaryColor};
    svg {
      color: ${props => (props.theme.dark ? '#fff' : props.theme.primaryColor)};
    }
    color: ${props => (props.theme.dark ? '#fff' : props.theme.primaryColor)};
  }
`;

export const TabLabel = styled.p`
  margin-top: 4px;
  font-size: 12px;
`;
