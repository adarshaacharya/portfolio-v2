import styled from 'styled-components';
import { Flex } from '@portfolio-ui/';
import { Link } from 'gatsby';

export const BlogItem = styled(Link)`
  color: ${props => props.theme.primaryBlack};
  display: block;
  margin-bottom: 70px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.1);
  
  /* box-shadow: 4px 4px 23px -10px ${props => props.theme.primaryColor}; */

  padding: 2rem 3rem;
  border-radius: 10px;
  border: 1px solid
    ${props =>
      props.theme.dark ? props.theme.primaryColor : 'hsla(0, 0%, 50%, 0.1)'};
  background: ${props => props.theme.secondaryColor};
  transition: 0.3s;

  &:hover {
    transform: translate(0, -10px);
  }
`;

export const DateTime = styled.p`
  font-family: 'Ubuntu', sans-serif;
  padding: 1rem 0;
`;

export const BlogTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  padding: 0.5rem 0 0 0;
`;

export const Description = styled.p`
  padding: .5rem 0;
  font-size : 1.1rem;
  font-weight : 400;
`;

export const Tags = styled(Flex)`
  margin-top: 1.5rem;
  > span {
    display: block;
    font-weight: 500;
    background: ${props => props.theme.accentColor};
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 3rem;
    border-bottom: 0;
    white-space: nowrap;
    line-height: 1;
    margin-right: 0.7rem;
  }
`;
