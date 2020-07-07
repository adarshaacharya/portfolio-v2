import React from 'react'
import Icon from '@hooks/use-icons'
import { SOCIALS } from '@src/constants/social'
import styles from './style.module.scss'

const SocialIcons = () => {
  return (
    <>
      <section className={styles.social}>
        <h2>Hit me up.</h2>
        <div className={styles.icons}>
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
      </section>
    </>
  )
}

export default SocialIcons
