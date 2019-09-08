# Backend App Using Express 
[![CircleCI](https://img.shields.io/circleci/project/github/ntkme/github-buttons/master.svg)](https://circleci.com/gh/ntkme/github-buttons)

## Description
This is a example repo for showing built simple rest API use express with React Native.Back-end repo in Heroku [here](https://github.com/muhrifai7/testBackends),Already deployed to Heroku, [here](https://foodappss.herokuapp.com) Enjoy and feel free to contact me with any questions :).

## Pre Installation Heroke
### In This Tutorial Im Using Heroku Cli
* SignUp / Login To https://dashboard.heroku.com/login.
* Create  New App in heroku.
* INSTALL POSTGRES in heroku (for free database ) API Postgres and then Tab Deploy.
* Follow the intructions
* Maka Sure you just have one Package Jason (Yarn or Npm)
* git init ... etc

## Pre Installation Express
### In This Tutorial Im Using MySql
* Foloow this for the best guide https://sequelize.org/master/manual/getting-started.html
* Install Node ,And than npm init.
* npm install express --save
* npm install -g nodemon --save for auto refresh
* Just Example CREATE MODEL MIRGARTION
npx sequelize-cli model:generate --name user --attributes email:string,password:string,name:string
* npx sequelize db:migrate for run migrate
* Delete All Tabel npx sequelize db:migrate:undo:all

## Relations Database
``` javascript
{
    ...
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
    ...
}
```

## My Dependencies
``` javascript
"dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "express-group-routes": "^1.1.0",
    "mysql": "^2.17.1",
    "mysql2": "^1.7.0",
    "nodemon": "^1.19.1",
    "pg": "^7.12.1",
    "sequelize": "^5.17.2",
    "sequelize-cli": "^5.5.0"
  }
```
## Add Procfile file in your root Directory
``` javascript
release: node_modules/.bin/sequelize db:migrate
web: node index.js
```

## License

WTFPL-LICENSE

See [LICENSE](http://www.wtfpl.net/txt/copying/)

