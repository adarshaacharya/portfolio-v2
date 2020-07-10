import React from 'react';
import useForm from '@hooks/use-form';
import SocialIcons from './SocialIcons';
import { ContactWrapper } from './Contact.style';

const Contact = () => {
  const [formData, handleInput] = useForm();

  return (
    <>
      <ContactWrapper>
        <h1>Drop Hello.</h1>
        If you have something you wanna talk about, have a question or just want
        to say hi, send me an email or DM me on Twitter.
        <form autoComplete="off">
          <div className="row">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Adarsha Acharya"
                value={formData.name}
                onChange={handleInput}
                required
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="adarsha@example.com"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              cols="30"
              rows="10"
              placeholder="Hello Aadarsha!"
              value={formData.message}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <input type="submit" value="Send" className="btn" />
          </div>
        </form>
      </ContactWrapper>

      <SocialIcons />
    </>
  );
};

export default Contact;
