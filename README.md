# LAB - 18

## Socket-IO

### Author: Jose Ojeda

### Links and Resources
* [submission PR](https://github.com/jose-401-advanced-javascript/socket.io/compare/dev?expand=1)
* [travis](https://travis-ci.com/jose-401-advanced-javascript/socket.io)


### Setup

#### Running the app
Lifecycle scripts included in socket:
  test
    npm run jest -- --coverage
  start
    node server.js

available via `npm run-script`:
  lint
    eslint .
  jest
    jest --runInBand
  test:watch
    npm run jest -- --watchAll
  test:verbose
    npm run test -- --verbose
  start:watch
    nodemon server.js
  
