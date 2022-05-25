# Contributing

Skilltrack docs are built using [Docusaurus 2](https://docusaurus.io/) and are written in MDX.

## Documentation issues in the repo
 
(see [list](https://github.com/skilltrack-ai/documentation/issues)). 
Issues also labelled as `good first issue`  are aimed at those making their first contribution to the repo 
(see [list](https://github.com/skilltrack-ai/documentation/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen++label%3Ac%2Fdocs+label%3A%22good+first+issue%22)). 
Issues also marked as `help wanted` 
(see [list](https://github.com/skilltrack-ai/documentation/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen++label%3Ac%2Fdocs+label%3A%22help+wanted%22)) 
are those that require community contributions.

Feel free to open pull requests to address these issues or to add/fix  docs features/content, even if a 
corresponding issue doesn't exist. If you are unsure about whether to go ahead and work on something like 
the latter, please get in touch with the maintainers in the `skilltrack`->`contrib` channel in the 
community [Discord](https://discord.gg/4J768p9J).

## Setup requirements

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/getting-started)

## Steps for contributing

We use the [fork-and-branch git workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/).

- Fork the repo and clone it:
  ```bash
  git clone https://github.com/<your-username>/documentation
  ```
- Checkout to a new branch:
  ```bash
  git checkout -b <new-branch-name>
  ```
- Install dependencies:
  ```
  yarn install
  ```
- For development, live reload and auto build while you're editing and saving files:
  ```bash
  yarn start
  ```
- Make the required changes.
- (Optional) Build docs to produce build files and verify:
    ```bash
    yarn build
    ```
    - The generated docs are in `build`.
    - View the built files by running a webserver:
        ```bash
        yarn serve
        ```

- Commit the changes.
- Push the changes to your fork and submit a pull request.

### Pre-commit checks
- Just before committing your changes, delete your local `build` folder completely and then build docs again. Scan the 
output and look for any syntax warnings (e.g. title underline too short, could not lex literal block, etc.).
- Ideally there should not be any syntax warnings that are being thrown.

## Notes
- The search is powered by [Algolia](https://www.algolia.com/) and is updated every day. Your local changes 
will not be reflected in search results.        
