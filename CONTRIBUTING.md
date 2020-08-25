# Contributing Guideline

All contributions are welcome including :

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Giving Blog topic idea

## Report bugs using Github's [issues](https://github.com/adarshaacharya/adarshaacharya.com.np/issues)

- Create the issue which you found with a quick summary and/or background if you can
- Give sample code if you can.

_If you want to give idea for blog post ceate a issue and give description of article that you want._

## Work on Issue

First of all, this is a JavaScript project that's distributed on [yarnpkg.com](https://yarnpkg.com/) and
therefore uses JavaScript tooling based on [Node.js](https://nodejs.org/) with dependencies from npm.
You're going to need to have those things installed to contribute to this project.

1. Fork the repo.
2. Clone your fork to your local machine.
3. Create a branch for your fix : `git checkout -b branch-name-here`.
4. Run `yarn install`.
5. Create `.env.development` file in main dir.
6. Check `.env.example` file and copy everything over there to `.env.development` file.
7. This project uses [Algolia](https://www.algolia.com/) for searching blogs. So, you must put api keys that algolia gives you in `.env.development` file. Check this docs on  [Configuring Algolia plugin](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#configuring-the-algolia-plugin).
8. Run `gatsby develop` command.
9. Make the appropriate changes for the issue you are trying to address or the feature that you want to add.
10. Use git add . to add file contents of changed files.
11. Push the changes to the remote repository using git push origin branch-name-here.
12. Submit a pull request to the upstream repository with meaningful description and title.
13. Iterate on the solution.
14. Get merged! 🎉 🎊

> If you facae any problem while setting up project you can [open issues](https://github.com/adarshaacharya/adarshaacharya.com.np/issues) I will guide you for setup.

### Note - Commit & PR Title :

It’s good to have descriptive commit messages so that other folks can make sense of what your commit is doing.
This project uses [Husky](https://github.com/typicode/husky/blob/master/README.md) prevent bad `git commit`, `git push` and more 🐶 \_woof!

Read [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) before making the commit message.

Also, for PR titles and description you should follow [Gatsby documentation](https://www.gatsbyjs.org/contributing/managing-pull-requests/#commit-and-pr-title)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)
