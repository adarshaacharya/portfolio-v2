import styled from 'styled-components';


export const Button = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.theme.primaryColor};
  color: #f8f8f8;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  margin: 0 0 0.5rem 0;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  transition: all 0.2s ease-in-out;
  opacity: 0.9;
  &:hover {
    transform: translate(-2px, -2px);
    opacity: 1;
  }

`;
