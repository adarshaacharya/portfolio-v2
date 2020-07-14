import React from 'react';

import github from '@images/social/github.svg';
import insta from '@images/social/insta.svg';
import twitter from '@images/social/twitter.svg';
import useAvatar from '@src/hooks/use-avatar';
import Resume from './Resume';

import {
  AuthorInfoWrapper,
  Avatar,
  AvatarName,
  Info,
  Bio,
  SocialIcons,
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
          <SocialIcons>
            <a href="https://github.com/adarshaacharya">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://twitter.com/UltimateAdarshx">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://instagram.com/adarsha004">
              <img src={insta} alt="Instagram" />
            </a>
          </SocialIcons>
        </Info>
      </AuthorInfoWrapper>

      <Bio>
        Hello! I’m Aadarsha Acharya, aspiring web developer based in Kathmandu
        Nepal.
      </Bio>
      <Bio>
        I'm super passionate about exploring and building open source web apps
        and tools. I like learning about new technologies and try to keep up
        with the always evolving JavaScript development world. Currently diving
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
