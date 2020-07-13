import styled from 'styled-components';
import { Flex } from '@portfolio-ui/';

export const TechStackWrapper = styled.section``;

export const TechItem = styled(Flex)`
  padding: 1rem 0;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  [data-icon='Next.js'] svg {
    fill: ${p => p.theme.primaryBlack};
  }
`;
