import { FormattedIcon } from '@portfolio-ui/';
import React from 'react';
import { tinyLetter } from '../../../config/SiteConfig';
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
          action={`https://tinyletter.com/${tinyLetter}`}
          method="post"
          target="popupwindow"
          onSubmit={`window.open('https://tinyletter.com/${tinyLetter}', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true`}
        >
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="your.awesome@email.com"
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
