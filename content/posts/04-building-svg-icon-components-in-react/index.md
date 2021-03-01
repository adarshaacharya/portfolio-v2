---
id: 04
title: 'Building SVG Icon Component in React'
author: Aadarsha Acharya
slug: building-svg-icon-component
description: 'Transform an SVG into React component.'
tags: ['react', 'svg']
date: 2021-03-01
---

SVG aka Scalable Vector Graphics are always prefered in web application maily because of its scalability i.e. you don't lose the quality of images when you Zoom in & out web pages.

Since svg is based on the markup langugae similar to XML it's much easier to manipulate it using CSS.

### Requirements:

- create-react-app v2 or
- Nestjs/ Gatsby application

> 🧠 Pro tip : Check out [Iconscout](https://iconscout.com/) if you want awesome icons for your project.

We have mainly two ways of using the SVG as React component:

### Method 1 : Direct Import as Component

If you are using CRA v2 or Next or Gatsby project you can directly import SVG as React component in your component.

Here I'm going to import the simple javascript icon in my Home component.

```js
// App.js
import { ReactComponent as IconJavascript } from './javascript.svg';
export default function App() {
  return (
    <div classname="App">
      <IconJavascript />
    </div>
  );
}
```

### Method 2 : Building your Custom SVG React Component

I'm big fan of this method. You can just copy and paste the XML code inside `javascript.svg` file and paste inside the the React Component. Customize the icon height & width according to your need.

```js
// IconJavascriptComponent.js
export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 256 256"
    preserveAspectRatio="xMinYMin meet"
  >
    <title>JavaScript</title>
    <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
  </svg>
);
```

Now import it inside your component where you need. In my case it is `App.js`.

```js
// App.js
import IconJavascriptComponent from './IconJavascriptComponent';
export default function App() {
  return (
    <div className="App">
      <IconJavascriptComponent />
    </div>
  );
}
```

Let's see what taht looks like in codesandbox:

https://codesandbox.io/s/silly-napier-ycdbd?file=/src/App.js
