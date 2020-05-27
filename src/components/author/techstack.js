import React from "react"
import { TECHS } from "../../constants/stack"
import Icon from "../../hooks/use-icons"
import styles from "./style.module.scss"
export default function TechStack() {
  return (
    <>
      <h2>{TECHS.title}</h2>
      <div className={styles.techs}>
        {TECHS.data.map(tech => (
          <Icon stack={tech} key={tech} />
        ))}
      </div>
    </>
  )
}
