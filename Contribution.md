# Contributing to [Telex]

Thank you for considering contributing to [Project Name]! We welcome all kinds of contributions, including bug reports, feature requests, and code improvements.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Code Contributions](#code-contributions)
    - [Development Workflow](#development-workflow)
      - [Branch Naming Rules](#branch-naming-rules)
      - [Commit Message Rules](#commit-message-rules)
    - [Submitting Pull Requests](#submitting-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

1. Clone your the repository:
   ```sh
   git clone https://github.com/hngprojects/telex_fe.git
   ```
2. Navigate to the project directory:
   ```sh
   cd telex_fe
   ```
3. Install dependencies:
   ```sh
   pnpm i
   ```
4. Start the local server to preview and interact with the app:
   ```sh
   pnpm run dev
   ```

## How to Contribute

1. Navigate to the src/telexComponents

2. create a folder with the your component name and add index.tsx inside the folder.

   ```sh
   src/telexComponents/<name-of-your-components>/index.tsx
   ```

3. render your component in the style-guides folder to view it on the browser.

   ```sh
   src/app/styles-guides/page.tsx
   ```

4. Use [Shadcn] (https://ui.shadcn.com/docs/components) for all UI components

### Reporting Bugs

If you find a bug, please open an issue on [GitHub Issues](https://github.com/[username]/[project-name]/issues) and include as much detail as possible. Provide steps to reproduce, expected and actual behavior, and any relevant logs.

### Suggesting Features

If you have an idea for a new feature, please open an issue on [GitHub Issues](https://github.com/[username]/[project-name]/issues) and describe your proposal. Explain why the feature would be useful and how it should work.

### Code Contributions

> Please make sure to have created a fork of the original repository. This is where you will work in when contibuting.

#### Development Workflow

1. Create a new branch for your work:

   ```sh
   git checkout -b feat/your-feature-name
   ```

   ##### Branch Naming Rules

   - You will likely work on features, bug fixes, refactors (restructuring code without changing functionality), chores on the repo (routine tasks such as updating dependencies or changing configurations), or documentation. Each of the type of update should be used as a prefix your branch name as `feat/`, `refactor/`, `fix/`, `chore/`, or `docs/`

2. git add your changes
   ```sh
   git add .
   ```
3. Make your changes, and commit them with descriptive messages:

   ```sh
   git commit -m "Feat: your commit message."
   ```

   Commit messages must start with a capital letter and must end with a full stop.

   ##### Commit Message Rules

   Commit messages also follow a similar pattern. However, there is no need to add ticket number since they can be easily tracked given the branch name.

4. Pull latest updates from dev

   ```sh
   git pull origin dev
   ```

5. Push to your branch

#### Submitting Pull Requests

1. go to your branch on the github repository

2. make a PR to the dev branch.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to [email@example.com].

## License

By contributing, you agree that your contributions will be licensed under the [Apache License](LICENSE).
