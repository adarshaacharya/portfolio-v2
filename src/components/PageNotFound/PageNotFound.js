import React from "react"

import { StyledPageNotFound } from './PageNotFound.style'

export default function PageNotFound() {
  return (
    <>
      <StyledPageNotFound>
        <h1>NOT FOUND</h1>
        <p>
          The page you're looking for doesn't exists. Please click on any link to continue.
        </p>
      </StyledPageNotFound>
    </>
  )
}
