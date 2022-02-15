# Lit Starter

The purpose of this repo is to explore creating web components with [Lit](https://lit.dev/).

## How this project was setup

```
mkdir lit-starter
cd lit-starter
yarn init
```

Add Lit, Typescript, and Snowpack

```
yarn add lit
yarn add snowpack typescript --dev
yarn add @snowpack/plugin-typescript lit ts-lit-plugin
```

Created src folder with index.html, index.ts, and my-element.ts.
Code copied from the [Lit tutorial](https://lit.dev/tutorial/).  I got a TypeScript error indicating that I needed to add "override" to the render function in the custom element so I added it (see below about the trouble this caused for snowpack).

Note that I had to use this in the html:

```
<script type="module" src="./index.js"></script>
```

Even though the entrpoint src file is index.ts.

Copied tsconfig.json from here : https://github.com/lit/lit/blob/main/packages/lit-starter-ts/tsconfig.json
Tweaked target and module to "es6"

Then I ran 

```
yarn snowpack init
```

and made these two modifications

```
mount: {src: "/"},
plugins: [
  '@snowpack/plugin-typescript'
],
```

Then I started the project with

```
yarn snowpack dev
```
(I also set this up as a command in package.json)

Next, I tried:

```
yarn snowpack build
```

And got this error: **error: Expected ";" but found "render"***

This took a long time to resolve, but I eventually changed noImplicitOverride to false in tsconfig.json.  It turns out snowpack was unable to handle the "override".

## To run

```
yarn dev
```

## To build

```
yarn build
```

## Notes

Manual typescript compile:

```
yarn tsc
```

TODO:
Use other 3rd-party components:
https://github.com/material-components/material-web/tree/master/packages/button
https://www.fast.design/docs/components/getting-started

Add a web-gl component?