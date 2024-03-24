## Git Buddy

### Installation

```
npm i -g shancy-git
```

### Features

- **Action: Commit And Push**
  - `-m`: The commit message for the push operation.
  - `-e`: An optional emoji for the commit message.
  - `-t`: The type of the resulting commit. (Based on [Commit Types](#Commit-Types))
  - `--amend`: A flag indicating whether to amend the previous commit.
  - Example: `npx gitbuddy push -t feat -m "Added Feature" --amend`
  - Example: `npx gitbuddy push -t fix -m "Fixed Bug"`
- **Action: Commit only**

  - Example: `npx gitbuddy commit -t feat -m "Message"`

- **Action: squash (Combine commits)**
  - `n`: The number of commits to squash (default is 1).
  - Example `npx gitbuddy squash -n 4 -t feat -m "Squash Commits"`
- **Action: pull**

  - Example: `npx gitbuddy pull`

- **Action: push_origin**

  - `--f`: A flag indicating whether to force-push to the origin.
  - Example: `npx gitbuddy push_origin`

- **Action: reset (Completely Deleting commits from remote)**
  - `n`: The number of commits to reset (default is 1).
  - Example: `npx gitbuddy reset -n 5`

## Commit-Types

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | ----- |
| feat        | Feature                  | A new feature                                                                                               | ✨    |
| fix         | Bug Fixes                | A bug Fix                                                                                                   | 🐛    |
| docs        | Documentation            | Documentation only changes                                                                                  | 📚    |
| style       | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      | 💎    |
| refactor    | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   | 📦    |
| perf        | Performance Improvements | A code change that improves performance                                                                     | 🚀    |
| test        | Tests                    | Adding missing tests or correcting existing tests                                                           | 🚨    |
| build       | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         | 🛠️    |
| ci          | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | ⚙️    |
| chore       | Chores                   | Other changes that don't modify src or test files                                                           | ♻️    |
| revert      | Reverts                  | Reverts a previous commit                                                                                   | 🗑️    |
