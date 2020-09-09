import React from 'react';
import { tinyLetter } from '../../../config';

const Subscribe = () => {
  return (
    <>
      <form
        action={`https://tinyletter.com/${tinyLetter}`}
        method="post"
        target="popupwindow"
        onSubmit={`window.open('https://tinyletter.com/${tinyLetter}', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true`}
      >

        <input type="email" name="email" id="email" placeholder="Enter your email" required />

        







      </form>
    </>
  );
};

export default Subscribe;
