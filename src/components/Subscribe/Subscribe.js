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
          News Letter
          <FormattedIcon name="Newsletter" className="newsletter" />
        </SubscribeTitle>{' '}
        <p>
          Subscribe to get notified with awesome articles deliverd directly in
          your inbox. I don't spam, really!{' '}
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
            placeholder="you@domain.com"
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
