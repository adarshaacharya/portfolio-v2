import useForm from '@hooks/use-form';
import { SectionTitle } from '@portfolio-ui/';
import React from 'react';
import {
  ContactButton,
  ContactForm,
  Form,
  FormContainer,
  FormDescription,
  FormGroup,
  Input,
  TextArea
} from './Contact.style';

const Contact = () => {
  const [formData, handleInput] = useForm();

  return (
    <>
      <ContactForm>
        <SectionTitle>Drop Hello.</SectionTitle>
        <FormDescription>
          If you have a question, talk to me about a project collaboration or
          just say hi, fill up the form below or send an email to&nbsp;
          <a href="mailto: adarshaofficial@gmail.com">
            adarshaofficial@gmail.com
          </a>
          . I'll respond as soon as possible!
        </FormDescription>

        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          autoComplete="off"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={handleInput} />
            </label>
          </p>

          <FormContainer>
            <FormGroup style={{ gridArea: 'name' }}>
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Message</label>
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
    </>
  );
};

export default Contact;
