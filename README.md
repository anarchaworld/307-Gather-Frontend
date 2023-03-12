### Gather (Frontend)
Gather is a web app where Cal Poly students/faculty get to explore what events there are on campus and host their own events for everyone to attend.

This repo hosts the source code for the frontend of `Gather`.

Our live website is here:
https://gather-5411b.web.app

The backend is stored [here.](https://github.com/anthony-yeo/307-Gather)
___
### Releases
For every sprint, a snapshot (release) can be found [here](https://github.com/anarchaworld/307-Gather-Frontend/releases)

___

### Build Status
![](https://github.com/anarchaworld/307-Gather-Frontend/actions/workflows/node.js.yml/badge.svg)

____
### Build Instructions

To compile and build the front end for `Gather`, clone the repo and run

```
npm install
```

To run it locally, run

```
npm run start
```
#### Environment Variables
If the home page is blank, check that there is a file named `.env.local` in the root of the repo. 
If the file does not exist, please go to mapbox and get an _access token of your own_, put

```
REACT_APP_MAPBOX_ACCESS_TOKEN=<YOUR ACCESS TOKEN>
```

inside that `.env.local`. Then re-run `npm run start`

<br></br>
To run all the test cases, enter
```
npm run test
```
To see code coverage, enter
```
npm run test -- --coverage
```

---
### UI Prototype
There are <ins>_**2 links**_</ins> because we have them on different pages.

Page Navigation is added for both links.

- [Login & Password](https://www.figma.com/file/A0BfmaQVH5doZ4Mg8GJMs4/Login-Screen?node-id=0%3A1&t=KfKAlqUsiZcyPFp8-1)
- [Everything Else](https://www.figma.com/file/A0BfmaQVH5doZ4Mg8GJMs4/Login-Screen?node-id=21%3A2&t=KfKAlqUsiZcyPFp8-1)

___
### Class Diagrams
The class diagrams for the backend struture can be found at the link below

https://github.com/anthony-yeo/307-Gather/wiki/Class-Diagrams

___
### Style Guide

For the Gather project, style guidelines are as follows:

- Lower camel-case for function names
- Tabs for indentation
- K&R curly braces

---

### VS Code / npm to install extensions

Run
`npm install pylint --save-dev`

To install prettier, run
`npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev`

To add config file, run
`npx pylint --init`

Store as json and select custom style options corresponding with style guide.

Add to json to match the following:

```json
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ]
```

Finally, add the "format" command to `package.json` to run prettier:

```json
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```

---

### Neovim

#### Prerequisite

- Neovim `>= 0.8.3`
- [Mason](https://github.com/williamboman/mason.nvim)
- [Mason Lspconfig](https://github.com/williamboman/mason-lspconfig.nvim)
- [Null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim)
- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

#### Details

To configure the style checker and linter use the configs files from this [repository](https://github.com/anarchaworld/dotfiles/tree/main/.config/nvim)
and run `:MasonInstall prettier` and `:MasonInstall json` and then choose appropriate options.

If you wish to set up LSP as well, run `:LspInstall javascript`
