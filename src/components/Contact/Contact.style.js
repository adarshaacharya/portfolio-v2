import styled, { css } from 'styled-components';
import { Button } from '@portfolio-ui/';

export const ContactForm = styled.section``;

export const Form = styled.form`
  min-height: 400px;
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  border-radius: 12px;
  background: ${props => props.theme.secondaryColor};
  border-top: 4px solid ${props => props.theme.primaryColor};
  border: 1px solid
    ${props => (props.theme.dark ? props.theme.primaryColor : 'none')};
  margin: 3rem 0;
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

export const FormDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7rem;
  a {
    &:hover {
      border-bottom: 1px solid
        ${props =>
          props.theme.dark
            ? props.theme.primaryBlack
            : props.theme.primaryColor};
    }
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

