import {css} from 'styled-components';

export const SvgAnimation = css`
  svg {
    transition: transform 0.2s infinite;
    fill: ${props => props.theme.primaryColor};
  }
  &:hover {
    svg {
      fill: ${props => props.theme.primaryText};
      transform: scale(1.1);
    }
  }
`;
