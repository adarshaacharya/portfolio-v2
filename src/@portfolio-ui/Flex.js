import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => (p.column ? 'column' : 'row')};
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
  flex-wrap: ${p => (p.nowrap ? 'nowrap' : 'wrap')};
  gap: ${p => p.gap};
`;
