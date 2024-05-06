![@solidjs-plus/~package-name~](https://assets.solidjs.com/banner?&background=tiles&project=@solidjs-plus/~package-name~)

# `@solidjs-plus/~package-name~` [![npm Version](https://img.shields.io/npm/v/@solid-plus/~package-name~.svg?style=flat-square)](https://www.npmjs.org/package/@solidjs-plus/~package-name~)

## Assets

To get a banner for a project, use the following url:

`https://assets.solidjs.com/banner?&background=tiles&project=@solid-plus/~package-name~`

If you want another type of background, you can choose between `tiles` and `blocks`.

`https://assets.solidjs.com/banner?project=@solid-plus/~package-name~&background=[tiles|blocks]`

## Get started to build for the `@solidjs-plus` community

Clone this repository. Once done don't forget to _**set your package name**_.
Search and replace _**`~package-name~`**_ in this `README.md` and the `package.json` files.

## NPM scripts

- Before publishing a release make sure all the tests pass:

  ```sh
  npm run test
  ```

- To run the tests while **developing**:

  ```sh
  npm run test:watch
  ```

- To run the test and have more friendly interface (will open a browser tab with the tests results)

  ```sh
  npm run test:ui
  ```

- When all the tests are green therefore valid, you can:

  - Build the package for the release:

  ```sh
  npm run build
  ```

  - Describe what changes:

  ```sh
  npm run changes
  ```

  - Follow the release steps:

  ```sh
  npm run release
  ```
