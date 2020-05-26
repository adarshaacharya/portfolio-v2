import React from "react"
import { TECHS } from "../../constants/stack"
import Icon from "../../hooks/use-icons"
import styles from "./style.module.scss"
export default function TechStack() {
  return (
    <>
      <h3>{TECHS.title}</h3>
      <div className={styles.techs}>
        {TECHS.data.map(tech => (
          <Icon stack={tech} key={tech} />
        ))}
      </div>
    </>
  )
}
