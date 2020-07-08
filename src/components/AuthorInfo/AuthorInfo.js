import React from 'react';
import Image from 'gatsby-image';

import TechStack from './TechStack';
import usePersonalPhoto from '@hooks/use-personal-pic';
import Icon from '@hooks/use-icons';
import { SOCIALS } from '@src/constants/social';

import github from '@images/social/github.svg';
import insta from '@images/social/insta.svg';
import twitter from '@images/social/twitter.svg';
import download from '@images/download.svg';
import { AuthorInfoWrapper } from './AuthorInfo.style';

export default function AuthorInfo() {
  const photo = usePersonalPhoto();

  return (
    <>
      <AuthorInfoWrapper>
        <div>
          <Image fixed={photo} className="author-img" />

          <div className="info">
            <h1>Aadarsha Acharya</h1>

            <div className="social-icons">
              <a href="https://github.com/adarshaacharya">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://twitter.com/UltimateAdarshx">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://instagram.com/adarsha004">
                <img src={insta} alt="Instagram" />
              </a>
            </div>
            <p>adarshaofficial@gmail.com</p>
          </div>
        </div>

        <p>
          Hey there, I am a fullstack developer from Kathmandu, Nepal. I mostly
          work on Javascript, React, Node & MongoDB.I love writing codes to
          solve real world problems and enjoy turning complex problems into
          simple, beautiful and intuitive solutions. I love speaking and
          contributing open source too.
        </p>

        <div className="resume">
          <img src={download} alt="Resume" className="icon" />
          <a
            className="link"
            href="https://drive.google.com/file/d/1yRn7sCfYR29rYTFr8dpLe0CnAyZQod-c/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </AuthorInfoWrapper>

      <TechStack />
    </>
  );
}
