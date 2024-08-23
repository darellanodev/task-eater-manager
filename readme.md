# Task Eater Manager

![Task Eater Manager banner](https://github.com/darellanodev/task-eater-manager/blob/main/img/github_readme/banner.png?raw=true)

A clicker style game based on a to-do task management. For learning purposes using Typescript and Jest. _(THIS APPLICATION IS IN AN EARLY STAGE OF DEVELOPMENT)_

## e2e tests

- First run server with `run_server.sh`
- When the server is running execute `run_e2e`

## compile and run the game

- Execute `run.sh` and wait to typescript end the compiling process
- Open with Live Server VSCode extension `index.html`

## Techniques applied

- TDD methodology when I can
- Jest for unit testing
- Playwright for e2e testing
- Vim plugin in VSCode to write code faster
- Patterns
  - Singleton for classes that only have one instance like TodoList
- Use of json-server for simulating an API
- Use of setTimeout to make notifications

## Notes for VSCode

- You must activate Prettier and ESLint extension to auto format the code on save
