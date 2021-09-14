import styled from 'styled-components';
import { Flex } from '@portfolio-ui/';
import { Link } from 'gatsby';

export const BlogItem = styled(Link)`
  display: block;
  margin-bottom: 70px;
  box-shadow: ${props => props.theme.cardShadow};
  padding: 2rem 3rem;
  border-radius: 3px;
  border: 1px solid
    ${props =>
      props.theme.dark ? props.theme.primaryColor : 'hsla(0, 0%, 50%, 0.1)'};
  background: ${props => props.theme.cardBg};
  transition: 0.3s;

  &:hover {
    h1 {
      color: ${p => p.theme.primaryColor};
    }
  }

  @media ${props => props.theme.media.tablet} {
    padding: 1.3rem 1rem;
    margin-bottom: 50px;
  }
`;

export const DateTime = styled.p`
  font-family: ${p => p.theme.UbuntuFontFamily};
  padding: 1rem 0;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`;

export const BlogTitle = styled.h2`
  font-family: ${p => p.theme.UbuntuFontFamily};
  color: ${p => p.theme.secondaryText};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  padding: 0.5rem 0 0 0;
`;

export const Description = styled.p`
  color: ${p => p.theme.primaryText};
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const Tags = styled(Flex)`
  margin-top: 1.5rem;
  > span {
    display: block;
    font-weight: 500;
    background: ${props => props.theme.tagColor};
    color: ${p => p.theme.primaryText};
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 3rem;
    border-bottom: 0;
    white-space: nowrap;
    line-height: 1;
    margin-right: 0.7rem;
  }
`;
