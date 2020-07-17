import React from 'react';

import { FooterWrapper } from './Footer.style';
export default function Footer() {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{' '}
    </FooterWrapper>
  );
}
