# HTML Obfuscator
[![Netlify Status](https://api.netlify.com/api/v1/badges/eae78dce-f2bb-4b04-99a1-2f20f02ba281/deploy-status)](https://app.netlify.com/sites/html-code-obfuscator/deploys)

Live demo: https://html-code-obfuscator.netlify.app/

![Demo](./docs/demo.gif)

A project based on ReactJS and Redux (any external library wasn't used). It aims to show the idea of code obfuscation but in a really simple way. You don't find here complicated algorithms or implementataions of clever ideas.

```
The main idea of code obfuscation is to make the source code difficult to read and understand by humans. 
It is useful when you want to hide some implementation details which may contain clever ideas.
```

https://searchsoftwarequality.techtarget.com/definition/obfuscation

## Technology stack
- React.js 16.5.2
- Typescript
- Bootstrap 4 (library `reactstrap` dedicated for ReactJS)

## Local setup
- npm install
- npm start  

If you want to build application and get static files, use:
- npm run build

## Project
### Structure
```
├───docs  
├───public  
├───src  
    ├───actions  
    ├───components  
    ├───model  
    ├───modules  
    ├───reducers  
    ├───services
    └───utils   
```
### Coding convention
- file names should be lowercase and with dash instead of space

## Application flow
![Redux](./docs/redux.png "Redux concept")

## Add Typescript to existing React project
https://facebook.github.io/create-react-app/docs/adding-typescript

1. npm install --save typescript @types/node @types/react @types/react-dom @types/jest
2. install types for external libraries! for example "@types/reactstrap"
    - if the library does not have types, create custom module with types for partciular library (see modules package)
3. Create properties/states for components according to Component interface (react.Component<P,S>)
4. Changes other file extensions from .js to tsx (optional)

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
