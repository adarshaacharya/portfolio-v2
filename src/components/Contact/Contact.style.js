import styled, { css } from 'styled-components';
import { Button } from '@portfolio-ui/';

export const ContactForm = styled.section``;

export const Form = styled.form`
  min-height: 400px;
  padding: 3rem;
  box-shadow: ${props => props.theme.cardShadow};
  border-radius: 12px;
  background: ${props => props.theme.cardBg};
  border-top: 4px solid ${props => props.theme.primaryColor};
  border: 1px solid
    ${props => (props.theme.dark ? props.theme.primaryColor : 'none')};
  margin-bottom: 5rem;
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8rem;
  margin-bottom: 1.5rem;
  a {
    border-color: transparent;
    transition: border-color 0.25s ease 0s;
    &:hover {
      border-bottom: 1px solid
        ${props =>
          props.theme.secondaryText};
    }
  }
`;

export const FormContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'name  email'
    'message  message'
    '. btn';
  label {
    color: ${p => (p.theme.dark ? '#fff' : '#252525')};
  }

  @media ${props => props.theme.media.tablet} {
    grid-template-areas:
      'name name'
      'email email'
      'message message'
      '.btn';
  }
`;

export const FormGroup = styled.div`
  padding: 5px 0;
`;

// common css feature
const FormControl = css`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #eaeaea;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 5px 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;

  &:focus {
    border-color: ${props => props.theme.primaryColor};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px ${props => props.theme.primaryColor};
    outline: 0 none;
  }
`;

export const Input = styled.input`
  ${FormControl};
`;

export const TextArea = styled.textarea`
  ${FormControl}
  width: 100%;
  padding: 10px 15px;
  font-size: 1rem;

  @media ${props => props.theme.media.tablet} {
    height: 150px;
  }
`;

export const ContactButton = styled(Button)`
  grid-area: btn;
  @media ${props => props.theme.media.tablet} {
    display: block;
    width: 100%;
  }
`;
