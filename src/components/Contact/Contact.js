import React from 'react';
import useForm from '@hooks/use-form';
import SocialIcons from './SocialIcons';
import { SectionTitle } from '@portfolio-ui/';
import {
  ContactForm,
  TextArea,
  ContactButton,
  Form,
  Input,
  FormContainer,
  FormDescription,
  FormGroup,
} from './Contact.style';

const Contact = () => {
  const [formData, handleInput] = useForm();

  return (
    <>
      <ContactForm>
        <SectionTitle>Drop Hello.</SectionTitle>
        <FormDescription>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, fill up the awesome form below or send an email to &nbsp;
          <a href="mailto: adarshaofficial@gmail.com ">
            adarshaofficial@gmail.com{' '}
          </a>
          and let's talk.
        </FormDescription>

        <Form autoComplete="off">
          <FormContainer>
            <FormGroup style={{ gridArea: 'name' }}>
              <label htmlFor="name">Name*</label>
              <Input
                type="text"
                name="Name"
                id="name"
                placeholder="Steve Smith"
                value={formData.name}
                onChange={handleInput}
                required
              />
            </FormGroup>

            <FormGroup style={{ gridArea: 'email' }}>
              <label htmlFor="email">Email*</label>
              <Input
                type="email"
                name="Email"
                id="email"
                placeholder="stevesmith@hey.com"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </FormGroup>

            <FormGroup style={{ gridArea: 'message' }}>
              <label htmlFor="message">Message*</label>
              <TextArea
                name="Message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Let's have chat buddy!"
                value={formData.message}
                onChange={handleInput}
                required
              />
            </FormGroup>
          </FormContainer>

          <ContactButton type="submit">Submit</ContactButton>
        </Form>
      </ContactForm>

      <SocialIcons />
    </>
  );
};

export default Contact;
