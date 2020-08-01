import React from 'react';
import { ExternalLink } from '@portfolio-ui/';
import { FooterWrapper } from './Footer.style';

export default function Footer() {
  return (
    <FooterWrapper>
      © Aadarsha {new Date().getFullYear()}, Built with
      {` `}
      <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>{' '}
    </FooterWrapper>
  );
}
