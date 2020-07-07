import React from 'react'
import { TECHS } from '@src/constants/stack'
import Icon from '@hooks/use-icons'
import { TechStackWrapper } from './AuthorInfo.style'

export default function TechStack() {
  return (
    <TechStackWrapper>
      <h2>Things I love</h2>
      <div className="techs">
        {TECHS.data.map(tech => (
          <div key={tech}>
            <Icon stack={tech} />
            <br />
            <p>{tech}</p>
          </div>
        ))}
      </div>
    </TechStackWrapper>
  )
}
