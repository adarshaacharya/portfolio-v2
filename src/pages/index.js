import React from 'react'
import { Link } from "gatsby"


export default function index() {
    return (
        <>
        <h1>Home Page</h1>
        <p> Welcome to my website</p>
        <Link to="/about">&rarr; About me</Link>
      </>
    )
}
