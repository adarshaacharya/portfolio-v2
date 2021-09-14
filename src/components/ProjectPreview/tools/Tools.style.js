import { Flex, SvgAnimation } from '@src/@portfolio-ui';
import styled from 'styled-components';

export const ToolsList = styled.div`
  position: relative;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 1fr);

  /* @media ${props => props.theme.media.tablet} {
    grid-template-columns: 1fr;
  } */

  @media ${props => props.theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ToolPreviewWrapper = styled.div`
  box-shadow: ${p => p.theme.cardShadow};
  padding: 15px 10px;
  cursor: default;
  border-radius: 3px;
  border: 1px solid
    ${props =>
      props.theme.dark ? props.theme.primaryColor : 'hsla(0, 0%, 50%, 0.1)'};
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus-within {
  }

  .tools-title {
    text-align: center;
    a {
      color: ${p => p.theme.secondaryText};
    }
  }

  .tools-links {
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-left: -10px;

    a {
      padding: 0 10px;
      svg {
        color: ${p => p.theme.primaryColor};
        width: 20px;
        height: 20px;
      }
      ${SvgAnimation};
    }
  }

  .tools-info {
    font-size: 0.9rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;

    li {
      background: ${props => props.theme.tagColor};
      color: ${props => props.theme.primaryText};
      margin: 0.2rem;
      padding: 0.2rem 0.4rem;
      font-size: 0.7rem;
      border-radius: 8px;
      font-weight: 500;
    }
  }
`;
