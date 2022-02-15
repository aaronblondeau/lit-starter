Setup NPM

```
yarn init
```

Add Lit, Typescript, and Snowpack

```
yarn add lit
yarn add typescript --dev
yarn add snowpack --dev
```

Copy tsconfig.json from here : https://github.com/lit/lit/blob/main/packages/lit-starter-ts/tsconfig.json

Start compiling components

```
yarn tsc --watch
```

And bundle them

```
yarn snowpack dev
```

To deploy

```
yarn tsc
yarn snowpack build
```