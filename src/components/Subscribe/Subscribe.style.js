import { SectionTitle } from '@portfolio-ui/';
import styled from 'styled-components';

export const SubscribeContainer = styled.div`
  padding: 2rem;
  margin-bottom: 5rem;
  border-radius: 20px;

  background: ${props => props.theme.cardBg};
  border-top: 4px solid #73c4fa;
  box-shadow: ${props =>
    props.theme.dark
      ? '0px 5px 0px rgba(0, 151, 251, 0.25)'
      : props.theme.cardShadow};

  p {
    font-size: 1rem;
  }
`;

export const SubscribeTitle = styled(SectionTitle)`
  margin: 0;
  padding: 10px 0;
  text-align: center;
`;

export const SubscribeForm = styled.form`
  display: flex;
  margin-top: 2rem;
`;
