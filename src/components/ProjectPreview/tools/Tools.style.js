import { Flex } from '@src/@portfolio-ui';
import styled from 'styled-components';

export const ToolsList = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 3fr);
  align-items: center;
`;

export const ToolsPreviewWrapper = styled.div``;

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
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-4px);
      opacity: 0.8;
    }
  }
`;
