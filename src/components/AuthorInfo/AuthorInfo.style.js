import Image from 'gatsby-image';
import styled from 'styled-components';
import { Flex } from '@portfolio-ui/';

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
    color: ${props => props.theme.primaryColor};
    line-height: 34px;
    font-size: 1.1rem;
    letter-spacing: 0.9px;
    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }
  @media ${props => props.theme.media.tablet} {
    justify-self: center;
    .email {
      margin-top: 0.5rem;
    }
  }
`;

export const AvatarName = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 1.9rem;
  letter-spacing: 2px;
  margin: 0;
  padding-bottom: 0.5rem;
  color: ${props => props.theme.textBlack};
  text-shadow: ${props => (props.theme.dark ? '1px 2px 1px #6D83F2' : 'none')};
`;

export const SocialIcons = styled(Flex)`
  margin-top: 10px;
  a {
    margin-right: 1.5rem;
    transition: transform 0.2s infinite;
    svg {
      width: 25px;
      height: 30px;
      fill: ${props => props.theme.primaryColor};
      &:hover {
        fill: ${props => props.theme.primaryText};
        transform: scale(1.1);
      }
    }
  }

  @media ${props => props.theme.media.tablet} {
    justify-content: center;
  }
`;

export const Bio = styled.p`
  padding: 0.7rem 0;
  line-height: 1.9rem;
  font-size: 1rem;
`;
