import React from 'react'
import Icon from '@hooks/use-icons'
import { SOCIALS } from '@src/constants/social'

import { SocialWrapper } from './Contact.style'

const SocialIcons = () => {
  return (
    <>
      <SocialWrapper>
        <h2>Hit me up.</h2>
        <div className="icons">
          {SOCIALS.data.map(el => (
            <div key={el.social}>
              <Icon stack={el.social} />
              <br />
              <a href={el.link} target="_blank" rel="noopener noreferrer">
                {el.social}
              </a>
            </div>
          ))}
        </div>
      </SocialWrapper>
    </>
  )
}

export default SocialIcons
