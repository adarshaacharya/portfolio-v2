import styled from 'styled-components';

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
  }

  a:hover,
  .active {
    cursor: pointer;
    padding-bottom: 25px;
    color: ${props => props.theme.primaryColor};
    border-bottom: 2px solid ${props => props.theme.primaryColor};
    
  }
`;
