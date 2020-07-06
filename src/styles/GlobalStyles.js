import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

:root {
    --light-color: #FCFCFC;
  // --light-color: #ffffff;
   --max-width: 1100px;
 }
 
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 body {
   --bg: var(--light-color);
 
   --light-text : rgba(0, 0, 0, 0.4);
   --primary-color: hsl(0, 0%, 30%);
   --secondary-color: hsl(202, 100%, 50%);
   --dark-color: hsl(0, 0, 0%);
   --select-color: hsla(55, 100%, 54%, 0.7);
   --normal-text: #222;
 
   --h1: hsl(0, 0%, 15%);
   --h: hsl(0, 0%, 10%);
 
   --nav-shadow: 0 4px 6px 0 hsla(0, 0%, 30%, 0.05);
   --nav-border: none;
   --nav-link: hsl(250, 15%, 45%);
 
   --theme: hsl(230, 84%, 69%);
 
   --hr-color: hsla(0, 0%, 0%, 0.2);
   
   --card-color : inherit;
   
   background: var(--bg);
   transition: 0.2s ease-out;
   font-family: "Lato", sans-serif;
   line-height: 1.5;
 }
 
 body.dark {
   -webkit-font-smoothing: antialiased;
 
   --light-text : #fff;
   --bg: #191919;
   // --bg : #191919;
   --primary-color: hsl(0, 0%, 70%);
   --secondary-color: hsl(217, 89%, 61%);
   --select-color: hsl(337, 80%, 81%);
   --normal-text: rgba(255, 255, 255, 0.88);
 
   --nav-shadow: none;
   --nav-border: 0.1px solid hsl(0, 0%, 22%);
   --nav-link: hsl(243, 15%, 75%);
 
   --h1: hsl(0, 0%, 85%);
   --h: hsl(0, 0%, 80%);
   --hr-color: hsla(0, 0%, 100%, 0.2);
 
   --card-color : #303030;
 
   background: var(--bg);
   transition: 0.2s ease-out;
 }
 
 // .bg-color {
 //   background-color: var(--bg);
 //   transition: 0.2s ease-out;
 
 //   // background-color: var(--bg);
 //   // color: var(--primary-color);
 //   // transition: color 0.2s ease-out, background 0.2s ease-out;
 // }
 
 hr {
   border: none;
   border-top: 1px var(--hr-color) solid;
   margin: 20px 0;
 }
 
 a {
   color: var(--primary-color);
   text-decoration: none;
 }
 
 ul {
   list-style: none;
 }
 
 img {
   max-width: 100%;
 }
 
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
   font-family: "Inter", sans-serif;
   margin-bottom: 0.55rem;
   line-height: 1.3;
   color: var(--h);
 }
 
 p {
   margin: 0.5rem 0;
   color: var(--primary-color);
   font-size: 1.3rem;
 }
 
 ::selection {
   background: var(--select-color);
   // background: rgb(113, 244, 221);
   // background: #4487f4;
   color: #111;
 }

 
.container {
    max-width: var(--max-width);
    margin: auto;
    padding: 0 2rem;
    overflow: hidden;
  }
  
  .text-center {
    text-align: center;
  }

  .flex {
    display: flex;
  }

.btn {
    display: inline-block;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
  }
  



`
export default GlobalStyles