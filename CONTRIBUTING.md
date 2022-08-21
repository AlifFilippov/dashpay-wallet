# Contributing to dashpay-wallet

💙 Thanks for contributing to **dashpay-wallet**! 💙

As a contributor, here are the guidelines we would like you to follow:
- [How can I contribute?](#how-can-i-contribute)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Coding rules](#coding-rules)
- [Working with the code](#working-with-the-code)

We also recommend that you read [How to Contribute to Open Source](https://opensource.guide/how-to-contribute).

## How can I contribute?

### Fix bugs and implement features

You can pick something from with [help wanted label](https://github.com/dashevo/dashpay-wallet/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22). Just leave a comment so everyone knows who's the boss here.

### Bug report

Don't hesitate to give us good old [bug report](https://github.com/dashevo/dashpay-wallet/issues/new).

### Feature request

Feature requests are always [welcome](https://github.com/dashevo/dashpay-wallet/issues/new).

## Submitting a Pull Request

Good pull requests are a fantastic help. They will be reviewed by the team ASAP.

**Please ask first** before embarking on any significant pull requests (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

If you have never created a pull request before, give it a shot, it is fun 🥳. [Use this tutorial](https://opensource.guide/how-to-contribute/#opening-a-pull-request) on how to send one.

## Coding rules

### Source code

To ensure consistency and quality throughout the source code, all code modifications must have:
- No [linting](#lint) errors
- A [test](#tests) for every possible case introduced by your code change
- **100%** test coverage
- [Valid commit message(s)](#commit-message-guidelines)

### Commit message guidelines

#### Atomic commits

If possible, make [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit), which means:
- a commit should contain exactly one self-contained functional change
- a functional change should be contained in exactly one commit
- a commit should not create an inconsistent state (such as test errors, linting errors, partial fix, feature with documentation etc...)

#### Commit message format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```commit
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The **footer** can contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages).

#### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type

The type must be one of the following:

| Type         | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| **feat**     | A new feature                                                                                               |
| **fix**      | A bug fix                                                                                                   |
| **docs**     | Documentation only changes                                                                                  |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)                                                                                                                         |
| **refactor** | A code change that neither fixes a bug nor adds a feature                                                                                                                      |
| **perf**     | A code change that improves performance                                                                     |
| **test**     | Adding missing tests or correcting existing tests                                                           |
| **build**    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| **ci**       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)                                                                                                                   |
| **chore**    | Other changes that don't modify src or test files                                                           |
| **revert**   | Reverts a previous commit                                                                                   |

#### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

#### Examples

```commit
`fix(pencil): stop graphite breaking when too much pressure applied`
```

```commit
`feat(pencil): add 'graphiteWidth' option`

Fix #42
```

```commit
perf(pencil): remove graphiteWidth option`

BREAKING CHANGE: The graphiteWidth option has been removed.

The default graphite width of 10mm is always used for performance reasons.
```

## Working with the code

### Lint

Before pushing your code changes make sure there are no linting errors with `npm run lint`.

**Tips**:
- Most linting errors can be automatically fixed with `npm run lint --fix`.
- Install Eslint plugin for your code editor to see linting errors.

### Tests

Before pushing your code changes make sure all **tests pass** and the **coverage is 100%**:

```bash
$ npm run test
```

### Commits

We use [Commitizen](https://github.com/commitizen/cz-cli) to help you create [valid commit messages](#commit-message-guidelines).
