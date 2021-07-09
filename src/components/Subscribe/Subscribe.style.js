import { SectionTitle } from '@portfolio-ui/';
import { Button } from '@src/@portfolio-ui';
import styled from 'styled-components';
import { FormControl } from '../Contact/Contact.style';

export const SubscribeContainer = styled.div`
  background: ${props => props.theme.bg};
`;

export const SubscribeTitle = styled(SectionTitle)`
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  svg {
    height: 60px;
    width: 60px;
    margin-bottom: 25px;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 20px auto;
`;

export const SubmitBtn = styled(Button)`
  padding: 0.8rem 1.5rem;
`;

export const Input = styled.input`
  ${FormControl}
`;
