import { SectionTitle } from '@portfolio-ui/';
import { Button } from '@src/@portfolio-ui';
import styled from 'styled-components';
import { FormControl } from '../Contact/Contact.style';

export const SubscribeContainer = styled.div`
  padding: 1rem;
  margin-bottom: 5rem;
  border-radius: 20px;
  background: ${props => props.theme.cardBg};
  border-top: 5px solid #73c4fa;
  box-shadow: ${props =>
    props.theme.dark
      ? '0px 5px 0px rgba(0, 151, 251, 0.25)'
      : props.theme.cardShadow};

  p {
    font-size: 1rem;
    margin-top: 15px;
  }
`;

export const SubscribeTitle = styled(SectionTitle)`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 2rem auto;
`;

export const SubmitBtn = styled(Button)`
  padding: 0.8rem 1.5rem;
`;

export const Input = styled.input`
  ${FormControl}
`;
