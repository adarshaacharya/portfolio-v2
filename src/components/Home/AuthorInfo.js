import React from 'react';

import getAvatar from '@lib/get-avatar';
import { ExternalLink, FormattedIcon } from '@portfolio-ui/';
import { socialmedia } from '@src/constants/socia-media';
import {
  AuthorInfoWrapper,
  Avatar,
  AvatarName,
  Bio,
  Info,
  SocialIcons,
} from './AuthorInfo.style';
import Resume from './Resume';
import TechStack from './TechStack';

export default function AuthorInfo() {
  const avatar = getAvatar();
  return (
    <>
      <AuthorInfoWrapper>
        <Avatar fixed={avatar} alt="adarsha" />
        <Info>
          <AvatarName> Aadarsha Acharya</AvatarName>

          <a href="mailto: adarshaofficial@gmail.com" className="email">
            <FormattedIcon name="Email" />
            <span>adarshaofficial@gmail.com</span>
          </a>

          <SocialIcons>
            {socialmedia &&
              socialmedia.map(({ url, name }, i) => (
                <div key={i}>
                  <ExternalLink href={url} aria-label={name}>
                    <FormattedIcon name={name} />
                  </ExternalLink>
                </div>
              ))}
          </SocialIcons>
        </Info>
      </AuthorInfoWrapper>

      <Bio>
        Hello! I’m Aadarsha Acharya, aspiring web developer based in Kathmandu
        Nepal.
      </Bio>
      <Bio>
        I'm super passionate about exploring and building open source web apps
        and tools and try to keep up with the always evolving JavaScript
        development world. Currently I'm diving in the React ecosystem with
        backend in Node.js.
      </Bio>
      <Bio>
        I'm currently pursuing Bachelor Degree in Computer Science at
        <ExternalLink href="http://www.tribhuvan-university.edu.np/">
          {' '}
          Tribuvan University.
        </ExternalLink>
      </Bio>

      <Resume />
      <hr />
      <TechStack />
    </>
  );
}
