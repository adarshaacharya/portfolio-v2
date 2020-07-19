import styled from 'styled-components';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  margin-right: auto;
  font-family: Ubuntu;
  font-size: 1.5rem;
  font-weight: 700;

  span {
    color: ${props => props.theme.primaryText};
  }
  &:hover {
    color: ${p => p.theme.primaryColor};
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  /*@TODO : ADD LOGO height & width : 50px !important*/
`;

export const NavItem = styled.li`
  margin-left: 48px;
  font-size: 1rem;

  a {
    color: ${props => props.theme.primaryText};
    font-weight: 500;
    letter-spacing: 1px;
  }

  a:hover,
  .active {
    cursor: pointer;
    padding-bottom: 25px;
    color: ${props => (props.theme.dark ? '#fff' : props.theme.primaryColor)};
    border-bottom: 2px solid ${props => props.theme.primaryColor};
  }
`;
