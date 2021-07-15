---
id: 6
title: 'Temporal Dead Zone in JS'
author: Aadarsha Acharya
slug: temporal-dead-zone
description: 'Learning in and out of temporal dead zone in javascript in short way.'
tags: ['javascript']
date: 2021-04-30
---

<img  src="dead.jpeg"  width="600"  alt="deadzone" />

### What is TDZ?

Temporal Dead Zone is a phase from hoisting till the variable is initialized to the value, where you can't access the variable in that zone.

If you've tried running this code :

```js
console.log(name);

const name = 'Evan';
```

You may have got this error which you might have probably ignored:

```

Uncaught ReferenceError: Cannot access 'name' before initialization

```

But if you replace `const` with `var` the answer would be undefined. Even if you replace `const` with `let` it will show same `Reference Error`.

Now most of you might think that var is hoisted at top but `let` & `const` aren't but that's not true. The fact that `let` and `const` both are hoisted but still giving error gives rise to this new fancy term called 'TEMPORAL DEAD ZONE'. 💀

### Execution of Javascript Code

Javascript is executed in a two-step process:

- Parsing of the code into an AST/executable byte code. It allocates the memory for each variable and sets the `var` declaration in global scope but `let` and `const` are hoisted in the separate memory space.

- Runtime execution where the value is assigned to the variables.

Whenever we declare variable the engine parses TDZ as follows:

```js
// code here...

let name = 'Evan';
```

```js
// 🚨 temporal deadzone for var name

// 🚨 temporal deadzone for var name

// 🚨 temporal deadzone for var name

let name = 'Evan'; // 🤩 found name variable ! no more temporal deadzone!!
```

My opinion is that TDZ is a good thing in JS, because it follows the good pattern - as it's rare that we want to access the value before we initialized.
