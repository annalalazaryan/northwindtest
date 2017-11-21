
# northwindtest

Test using northwind oData



* Database (mongoose) (http://mongoosejs.com/)
* Testing (mocha, chai) (https://mochajs.org/, http://chaijs.com/)
* Doc generation with jsdoc (http://usejsdoc.org/)
* Linting using standard eslint (https://eslint.org/)

## Requirements
* node __^7.0.0__
* npm __^4.0.0__
* pm2 istalled globally

##
```bash
npm install pm2 -g
```

## Installation
```bash
git clone https://github.com/annalalazaryan/northwindtest.git
```
## Setup
```bash
npm install
```

## Run
```bash
npm start
```

## Type in your browser following link And check orders.csv file in your downloads folder. It's contains total number of orders made each territory (based on the employee that made that order). 
```bash
http://localhost:3000/orders/count
```

## Features
* [koa2](https://github.com/koajs/koa/tree/v2.x)
* [koa-router](https://github.com/alexmingoia/koa-router)
* [koa-body](https://github.com/dlau/koa-body)
* [koa-logger](https://github.com/koajs/logger)
* [Mocha](https://mochajs.org/)
* [jsdoc](http://usejsdoc.org/)
* [ESLint](http://eslint.org/)

## Structure
```
├── app.js                   # Bootstrapping and entry point   
├── config                   # Server configuration settings and environment config
│   ├── development.json
│   ├── staging.json
│   ├── production.json
│   └── index.js             # Exports config based on environment 
├── src                      # Source code
│   ├── controllers			 # Controllers	
│   ├── models               # Mongoose models
│   ├── routes            	 # Implemented routes
│   └── validations       		 # Directory for validation files
│   	├── schemes					 # Joi validation schemes	
│   	└── index.js				 # Exports validate function
├── tests                    # Unit tests
├── libs                     # Libraries
├── services                 # Services
└── docs                     # Generated docs

```

## Usage
* `npm start` Start application
* `npm run docs` Generate API documentation
* `npm run lint` Run lint
* `npm test` Run test cases

## Documentation
API documentation generated by [jsdoc](http://usejsdoc.org/).

You can find generated files in /docs directory


 
