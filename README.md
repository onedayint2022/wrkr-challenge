# WRKR Challenge Specifications

# Project Detail

## Time 

Time spent : 8hours

## Structure Overview

```
demo/ .................... Project Folder
├─ public/ ........................ Public Static Files Root Folder
│  ├─ favicon.ico ................. Project Favicon
│  ├─ logo192.png .................... Project Icon
|  ├─ logo512.png .................... Project Icon
│  ├─ index.html .................. Project Production HTML File
│  └─ indexDev.html ............... Project Development HTML File
├─ src/ ........................... Project Root Folder
│  ├─ global.d.ts ................. Typescript Third-party Package Declaration File
│  ├─ global.css .................. Global Style File
│  ├─ index.tsx ................... Project Root File
│  ├─ Assets/ ..................... Project Img Folder
│  ├─ Constant/ ................... Project Reusable Style Root Folder
│  ├─ DefaultData/ ................ Project DefaultData Root Folder
│  ├─ Components/ ................. Project Components Root Folder
│  │  └─ ComponentA/ .............. Component Folder Demo
│  │     ├─ index.tsx ............. Component A Entry File
│  │     └─ style.scss ............ Component A Style File
│  ├─ Layout/ ..................... Project Page Layout Root Folder
│  │  └─ LayoutA/ ................. Project Layout Folder
│  │     ├─ index.tsx ............. Layout A Entry File
│  │     └─ style.scss ............ Layout A Style File
│  ├─ Section/ .................... Project Sections Root Folder
│  │  └─ SectionA/ ................ Sections Folder
│  │     ├─ index.tsx ............. Section A Entry File
│  │     └─ style.scss ............ Section A style
│  └─ Store/ ...................... Store Root Folder
│     ├─ StateManager.ts .......... Root Manager To Combine Reducer Saga
│     ├─ types.ts ................. Action Types File
│     ├─ actions.ts ............... Actions File
│     ├─ reducer.ts ............... Reducer File
│     └─ sagas.ts ................. Asynchronous Request Function Management Saga File
├─ webpackConfig/ ................. Webpack Root Folder
│  ├─ webpack.common.js ........... Webpack General Configuration File
│  ├─ webpack.dev.js .............. Webpack Development Environment Packaging Configuration File
│  └─ webpack.prod.js ............. Webpack Production Environment Packaging Configuration File
├─ .prettierrc.js ................. Code Formatting Style Rules File
├─ package.json ................... Project Configuration Information File
└─ tsconfig.json .................. Typescript Compilation Rules File


```

## How to run

- Using `npm install` to install all necessary dependencies.
- Using `npm run start` to run project in the development environment

## Functions realized

- Searching result by as at least three letters
- Searching result by filters
- Responsive design

## Limitations in Project

- Build failed due to unknown errors
- Notifications for user to indicate the limitation of input(3 letter or more)

