import { Flex } from '@portfolio-ui/';
import styled from 'styled-components';

export const TechStackWrapper = styled.section``;

export const TechItem = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  [data-icon='Next.js'] svg {
    fill: ${p => p.theme.primaryText};
  }
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${p => (p.theme.dark ? 'none' : '#EBEBEB')};
    color: ${p => (p.theme.dark ? '#8CF1B3' : p.theme.primaryColor)};
    border-radius: 10px;
    transform: scale(0.9);
  }

`;
