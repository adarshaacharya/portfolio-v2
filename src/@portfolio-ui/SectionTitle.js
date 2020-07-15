import styled from 'styled-components';

export const SectionTitle = styled.h1`
  margin: 50px auto;
  font-size: 1.7rem;
  font-weight: 900;
  font-style: normal;
  color: ${p => (p.theme.dark ? p.theme.primaryText : p.theme.primaryBlack)};
  font-family: 'Poppins', sans-serif;
  text-align: ${p => p.align};
  line-height: 45px;
  letter-spacing: 1px;

  @media ${props => props.theme.media.tablet} {
    margin: 20px auto;
    text-align: center;
    font-size: 1.5rem;
    line-height: 30px;
  }
`;
