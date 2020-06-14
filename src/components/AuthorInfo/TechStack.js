import React from "react"
import { TECHS } from "../../constants/stack"
import Icon from "../../hooks/use-icons"
import styles from "./style.module.scss"

export default function TechStack() {
  return (
    <>
      <h2>Things I love.</h2>
      <div className={styles.techs}>
        {TECHS.data.map(tech => (
          <div key={tech}>
            <Icon stack={tech} />
            <br/>
            <p>
              {tech}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
