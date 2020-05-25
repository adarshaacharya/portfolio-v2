import React from "react"
import { TECHS } from "../../constants/stack"
import  Icon  from "../../hooks/use-icons"

export default function TechStack() {
  return (
    <>
      <h1>{TECHS.title}</h1>
      {TECHS.data.map(tech => (
        <Icon stack={tech} />
      ))}
    </>
  )
}
