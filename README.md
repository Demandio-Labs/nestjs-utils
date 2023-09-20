# Shared NestJS utils

This repository aims to be an archive for common classes, service providers, managers, modules, etc. that can be re-used in our NestJS projects.

## Release

This project uses [_semantic-release_](https://semantic-release.gitbook.io/semantic-release/), which alongside [commitlint](https://commitlint.js.org/#/) helps to automate publishing to NPM.
We use [Husky](https://typicode.github.io/husky/) to enable git-hooks for commitlint.

For defining versions, the commit message follows a standard syntax:

| Commit with       | Release Type     | Version Change |
| ----------------- | ---------------- | -------------: |
| `breaking change` | Breaking release |      **N**.x.x |
| type `feat`       | Feature release  |      x.**N**.x |
| type `fix`        | Patch release    |      x.x.**N** |
| type `perf`       | Patch release    |      x.x.**N** |
| type `chore`      | NO release!      |                |
