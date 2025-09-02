<p align="center"><img src="https://i.imgur.com/a9QWW0v.png"></p>

## Usage

### Create an App

```
# with npx
$ npx create-nextron-app my-app --example with-tailwindcss

# with yarn
$ yarn create nextron-app my-app --example with-tailwindcss

# with pnpm
$ pnpm dlx create-nextron-app my-app --example with-tailwindcss
```

### Install Dependencies

```
$ cd my-app

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

## CI / Releases

This repository includes GitHub Actions workflows that run tests, build the renderer and the Electron app, and publish build artifacts to Releases.

- `CI` (`.github/workflows/ci.yml`) runs on push/PR to `main` or `master`. It runs the test suite, builds the renderer and Electron app, and uploads the `dist` folder as an artifact.
- `Release builds` (`.github/workflows/release.yml`) runs when a Release is published. It builds on macOS, Windows, and Linux, packages the `dist` folder for each OS, uploads the artifacts, and appends download links to the Release notes.

To create a release and get platform builds:

1. Push your changes and create a draft release on GitHub.
2. Publish the Release. The `release` workflow will run and attach `linux.zip`, `windows.zip`, and `macos.zip` to the release when complete.

If you prefer local build commands, build the renderer and app locally with:

```bash
npx next build ./renderer
npm run build
```
