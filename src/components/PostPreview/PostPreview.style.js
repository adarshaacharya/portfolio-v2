import styled from 'styled-components';

export const PostPreviewWrapper = styled.article`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  margin-bottom: 4rem;
  padding: 1rem;
  background: ${props => props.theme.secondaryColor};
  &:hover {
    cursor: pointer;
  }
`;
