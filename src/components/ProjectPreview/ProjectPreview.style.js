import styled from 'styled-components';
import { Flex, ExternalLink, SvgAnimation } from '@portfolio-ui/';
import Image from 'gatsby-image';

export const ProjectPreviewWrapper = styled.div`
  padding: 60px 0;
  border: none;
  border-bottom: 1px solid ${p => p.theme.hrColor};

  &:first-of-type {
    padding-top: 0px;
  }

  &:last-of-type {
    border-bottom: 0;
  }

  @media ${props => props.theme.media.tablet} {
    margin: 0;
  }
`;

export const Project = styled.div`
  padding: 0.5rem 0;
  min-height: 480px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'thumbnail title '
    'thumbnail   links'
    'description  description';

  @media ${props => props.theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'thumbnail'
      'links'
      'description';
  }
`;

export const ProjectImgContainer = styled(ExternalLink)`
  grid-area: thumbnail;
`;

export const ProjectImg = styled(Image)`
  border: 2px solid
    ${props => (props.theme.dark ? props.theme.primaryColor : 'none')};
  box-shadow: 0 3px 4px hsla(0, 0%, 0%, 0.4);
  height: 100%;
  background-size: cover;
  border-radius: 20px;
  max-width: 485px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }

  @media ${props => props.theme.media.tablet} {
    max-width: 100%;
    border-radius: 0;
  }
`;

export const ProjectTitleContainer = styled(ExternalLink)`
  grid-area: title;
  align-self: flex-end;
`;

export const ProjectTitle = styled.h3`
  cursor: pointer;
  padding: 1.5rem 0 1rem 0.5rem;
  margin: 0;
  background: ${p => (p.theme.dark ? p.theme.cardBg : p.theme.tagColor)};
  border: 1px solid
    ${props =>
      props.theme.dark ? props.theme.primaryColor : 'hsla(0, 0%, 50%, 0.1)'};
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.3);
  border-radius: 0 4px 4px 0;
  font-family: ${p => p.theme.UbuntuFontFamily};

  @media ${props => props.theme.media.tablet} {
    font-size: 1.2rem;
    box-shadow: none;
    padding: 10px 0;
    text-align: center;
    border-radius: 0;
  }
`;

export const ProjectLinks = styled(Flex)`
  grid-area: links;
  @media ${props => props.theme.media.tablet} {
    justify-self: center;
  }
`;

export const ProjectLink = styled(ExternalLink)`
  position: relative;
  top: 7px;
  left: 10px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  svg {
    width: 25px;
    height: 30px;
  }
  ${SvgAnimation};
`;

export const ProjectDescription = styled.p`
  grid-area: description;
  padding: 2rem 0;
  line-height: 2.215rem;
  font-size: 1rem;

  @media ${props => props.theme.media.tablet} {
    padding: 1rem 0;
  }
`;

export const TechList = styled(Flex)`
  li {
    align-self: center;
    list-style: none;
    display: block;
    font-weight: 500;
    background: ${props => props.theme.tagColor};
    color: ${props => props.theme.primaryText};
    margin: 0.2rem;
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
    border-radius: 3rem;
    border-bottom: 0;
    white-space: nowrap;
    line-height: 1;
  }
`;
