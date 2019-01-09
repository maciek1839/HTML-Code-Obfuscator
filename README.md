# HTML Obfuscator

An academic project based on ReactJS and Redux (any external library wasn't used).
If you want to develop app, use commands:
- npm install
- npm start  

If you want to build application and get static files, use:
- npm run build

## Technology stack
- React.js
- Typescript
- Bootstrap 4 (library `reactstrap` dedicated for ReactJS)

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

### Links
[reactstrap library](https://reactstrap.github.io/components)

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### TODOs
- Redux library (`react-redux`)