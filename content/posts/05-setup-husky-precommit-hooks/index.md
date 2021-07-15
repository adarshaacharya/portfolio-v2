---
id: 5
title: 'Setup pre-commit hooks with husky v6 + commitlint + lint-staged'
author: Aadarsha Acharya
slug: setup-husky-precommit-hooks
description: 'In this guide we will learn how to enforce commit conventions in your project running pre-commit checks.'
tags: ['git', 'hooks', 'husky', 'commit-lint']
date: 2021-04-06
---

### Commit Conventions

While working on the larger projects the contributors may add any sorts of random commit messages that will make the git log messy. It's always good to enforce some kinds of conventions while making the commit message.It will make the commit history more readable.

We can write convention by ourself but there is already [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and npm packages built for us to make this process a lot easier.

Example :
Commit message with scope

```bash
feat(lang): add nepali language
```

You can check other conventions [here](https://www.conventionalcommits.org/en/v1.0.0/).

<p align="center">
  <img width="600" src="commitlint.svg" alt="commitlint"/>
</p>

<p align="center">

_Credit : [commitlint](https://github.com/conventional-changelog/commitlint/blob/master/README.md) package docs_

</p>

### Pre-commit checks

Git hooks are the actions that git allows you to perform certain action when we trigger certain actions in our git workflow. The events might be:

- pre-commit
- pre-push
- pre-rebase
- post-update

Pre-commit hooks are actions that run after staging your changes and running `git commit` and before a commit is completed.

We can make pre-commit hooks to check `conventional-commits` on every commit.
If the checks fail then the commit is not made and an error shown, while if all checks pass the commit is made as normal.

### Husky 🐶

Husky makes these things easier by defining the hooks and run the certain sceipts when certain events are triggered in git workflow.

### What's in Husky v6 ?

After the introduction from husky v4 to v6 there are sinificant changes in the husky tooling. The new Husky approach tends to keep the Husky away from the JS eco-system, instead making it hybrid.

There are two excellent articles by husky authors regarding this :

- [Why husky has dropped conventional JS config](https://blog.typicode.com/husky-git-hooks-javascript-config/)

- [Why husky doesn't autoinstall anymore](https://blog.typicode.com/husky-git-hooks-autoinstall/)

### Local Setup

I've taken an React project in this example but you can setup on any projects.

Run following command in your terminal :

```bash
npx husky-init
```

Chack your `package.json` file. You may have seen `prepare` script and `husky` added as dev dependencies.

`package.json`

```json
{

  "scripts": {
    ...
    "prepare": "husky install"
  },
  "devDependencies": {
    ...
    "husky": "^6.0.0"
  }
}
```

Install husky in your project :

```bash
npm install
```

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

```

Previously, all hooks lived within package.json under the "husky" object. Now it creates separate directory named `.husky/` and creates two files `commit-msg` & `pre-commit`.

Checking `comit-msg` file you might find the following bash script :

`.husky/commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit ""

```

Since, we are not doing any thing in `pre-commit` hooks clear everything what's inside the `.husky/pre-commit` and we will add additional scripts over here later.

**Add commit-lint package to lint commit messages.**

```bash
npm install @commitlint/config-conventional @commitlint/cli --dev
```

Create file named `commitlint.config.js` in your root directory and paste following code there :
`commitlint.config.js`:

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

**The setup now works for the commitlint !!**

<img src="fail-commit.png" alt="commit-failed"/>

### Adding lint-staged

But, the problem with our current setup is that the hooks runs of the whole file system in our project which is perfectly fine in small projects.
Suppose we are working on large project where we have to lun prettier and lint before every commits `pre-commit` hooks will then run all the unstaged files too and makes the

But as the file size grows
we want to only track those files which are only changed and staged.

For that we need npm package `lint-staged`.

```bash
npm install lint-staged --save-dev
```

Now go to package.json and write the following script `pre-commit` which runs the lint-staged in our project.

`package.json`

```json
  "scripts": {
    ...
    "pre-commit": "lint-staged",
    "prepare": "husky install"
  },
```

Now create file named `.lintstagedrc` on our root directory and let us write configuration what we want the `lint-staged` to do before commits.

_You can setup below file as per your needs here I've setup lint-staged to run the eslint and prettier on src/ directory._

`.lintstagedrc`:

```json
{
  "src/**/*.+(js|json|ts|tsx)": ["eslint"],
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"]
}
```

Now inside `.husky/pre-commit` add the following script :

`.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run pre-commit
```

That's it ! Now test everything that we've worked on.
<img src="success.png" alt="commit-success" />

> 🧠 If you are already using husky in your project you can migrate easily yo v6 [check this link!](https://github.com/typicode/husky-4-to-6)

🤔 If you have any problem regarding husky and commitlint setup comment down below or you can directly message me on twiiter via : [@aadarshatweets](https://twitter.com/aadarshatweets)

🔥 Also, if you see any kind of mistake/typo on above post [submit PR on GitHub](https://github.com/adarshaacharya/adarshaacharya.com.np/edit/master/content/posts/05-setup-husky-precommit-hooks/index.md).
