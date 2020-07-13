import React from 'react';

import useAvatar from '@src/hooks/use-avatar';
import Resume from './Resume';

import {
  AuthorInfoWrapper,
  Avatar,
  AvatarName,
  Info,
  Bio,
} from './AuthorInfo.style';
import TechStack from './TechStack';

export default function AuthorInfo() {
  const avatar = useAvatar();
  return (
    <>
      <AuthorInfoWrapper>
        <Avatar fixed={avatar} alt="adarsha" />
        <Info>
          <AvatarName>Aadarsha Acharya</AvatarName>
          <a href="mailto: adarshaofficial@gmail.com">
            ✉️ adarshaofficial@gmail.com
          </a>
        </Info>
      </AuthorInfoWrapper>

      <Bio>
        Hello! I’m Aadarsha Acharya, aspiring web developer based in Kathmandu
        Nepal.
      </Bio>
      <Bio>
        I'm super passionate about exploring and building open source web apps
        and tools. I like learning about new technologies and try to keep up
        with the always-evolving JavaScript development world. Currently diving
        in the React ecosystem with backend in Node.js.
      </Bio>
      <Bio>
        I'm currently pursuing Bachelor Degree (class of 2018) in Computer
        Science at
        <a
          href="http://www.tribhuvan-university.edu.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Tribuvan University.
        </a>
      </Bio>

      <Resume />
      <TechStack />
    </>
  );
}
