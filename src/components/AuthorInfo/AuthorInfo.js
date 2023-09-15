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

const AuthorInfo = () => {
  const avatar = getAvatar();
  return (
    <>
      <AuthorInfoWrapper>
        <Avatar image={avatar} alt="adarsha" />
        <Info>
          <AvatarName> Aadarsha Acharya</AvatarName>

          <a href="mailto:adarshaofficial@gmail.com" className="email">
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
        Hello! I’m Aadarsha Acharya, fullstack JavaScript developer based in
        Kathmandu Nepal, currently working as Software Engineer in game-tech domain.
      </Bio>
      <Bio>
        I'm super passionate about exploring and building open source web apps
        and tools. Currently I'm working in the React ecosystem with backend in
        Node.js.
      </Bio>

      <Resume />
      <hr />
    </>
  );
};

export default AuthorInfo;
