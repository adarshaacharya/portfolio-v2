import { FormattedIcon } from '@portfolio-ui/';
import React from 'react';
import { buttonDownEmail } from '../../../config/SiteConfig';
import {
  Input,
  SubmitBtn,
  SubscribeContainer,
  SubscribeForm,
  SubscribeTitle,
} from './Subscribe.style';

const Subscribe = () => {
  return (
    <>
      <SubscribeContainer>
        <SubscribeTitle>
          Newsletter
          <FormattedIcon name="Newsletter" className="newsletter" />
        </SubscribeTitle>{' '}
        <p>
          Subscribe to get notified with awesome articles delivered right in
          your inbox. No spam.
        </p>
        <SubscribeForm
          action={`https://buttondown.email/api/emails/embed-subscribe/${buttonDownEmail}`}
          method="post"
          target="popupwindow"
          onSubmit={() => `window.open(
            'https://buttondown.email/${buttonDownEmail}',
            'popupwindow'
          )`}
        >
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
            required
          />
          <input type="hidden" value="1" name="embed" />
          <SubmitBtn type="submit">Subscribe</SubmitBtn>
        </SubscribeForm>
      </SubscribeContainer>
    </>
  );
};

export default Subscribe;
