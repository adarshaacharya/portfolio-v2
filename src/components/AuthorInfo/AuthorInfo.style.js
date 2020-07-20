import Image from 'gatsby-image';
import styled from 'styled-components';
import { Flex, SvgAnimation } from '@portfolio-ui/';

export const AuthorInfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  margin-bottom: 2rem;

  @media ${props => props.theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  border: 3px solid ${props => props.theme.primaryColor};
  box-shadow: 4px 4px 23px -10px ${props => props.theme.primaryColor};

  &:hover {
    cursor: pointer;
  }

  @media ${props => props.theme.media.tablet} {
    justify-self: center;
  }
`;

export const Info = styled.div`
  .email {
    display: inline-flex;
    line-height: 50px;
    font-size: 1.1rem;
    letter-spacing: 0.7px;
    svg {
      height: 37px;
      width: 37px;
      margin-right: 11px;
      margin-top: 6px;
    }
    ${SvgAnimation};
  }

  @media ${props => props.theme.media.tablet} {
    justify-self: center;
    .email {
      margin-top: 0.5rem;
    }
  }
`;

export const AvatarName = styled.h1`
  font-family: ${props => props.theme.secondaryFontFamily};
  font-weight: 900;
  font-size: 1.7rem;
  letter-spacing: 1px;
  margin: 0;
  color: ${props => props.theme.textBlack};
`;

export const SocialIcons = styled(Flex)`
  margin-top: 10px;
  a {
    margin-right: 1.5rem;
    svg {
      width: 25px;
      height: 30px;
    }
    ${SvgAnimation};
  }

  @media ${props => props.theme.media.tablet} {
    justify-content: center;
  }
`;

export const Bio = styled.p`
  padding: 0.7rem 0;
  line-height: 1.9rem;
  font-size: 1rem;
  a {
    border-color: transparent;
    transition: border-color 0.25s ease 0s;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.primaryColor};
    }
  }
`;
