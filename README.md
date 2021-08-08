# server-deployment-practice

![img](https://camo.githubusercontent.com/8d74b9642293def5b2249840145469c56a89551b8a42b8d6784eadb12e547a0b/68747470733a2f2f696d6167652e736c696465736861726563646e2e636f6d2f696e66743133322d3039333033776562636f6e63657074732d3039303932303136343430322d70687061707030322f39352f696e66743133322d3039332d30332d7765622d636f6e63657074732d352d3732382e6a70673f63623d31323533343635303832)

## Practice creating and deploying a web server using CI CD on Heroku

* ## Heroku:
For dev branch : https://dunia-server-deploy-dev.herokuapp.com/

For main branch : https://dunia-server-deploy-prod.herokuapp.com/

* ## Github Actions:
https://github.com/Duniaalkilany/server-deployment-practice/actions
 
* ## pull request :
https://github.com/Duniaalkilany/server-deployment-practice/pull/2


## .env requirements (where applicable)
PORT - 3000

## NODE.JS

Node.js allows users to build JavaScript applications
REPL Read, Evaluate, Print, Loop
Node.js comes with a basic REPL

## What is NPM?

Node Package Managment system: It is an ecosystem of applications that help developers create applications with packages

NPM Init -y: Installs package.json file

## Tests Handlers: Is the location where error's are handled. Handlers aslo will be where we put the routes for servers 404 is route not found 500 server error

## Middleware: Meant to happen in the middle of the Web Request Response Cycle. It is meant to catch the information. WRRC - Web Request Response Cycle

## CI CD: Continuos Intergration and Continuous Deployment

## deppendicies vs devDependiceis
### "dependencies": Packages required by your application in production.
### "devDependencies": Packages that are only needed for local development and testing.


## steps :

* ### npm i jest

* ### add start scripts : "node index.js"

* ### add test scripts : "jest"

* ### add folder outside tests add file server.test.js

* ### commands to devDependencies npm i -D supertest

## Execute:

* ### Setup a Node.js Package using npm

* ### Create CommonJS modules

* ### Create a simple express server

* ### See passing tests via GitHub actions (CI)

* ### Deploy to Heroku using CD


## By - Dunia Alkilany