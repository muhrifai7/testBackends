const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const CityController = require('./controllers/city')

app.group("/api/v1", (router) => {

    //todos API
    router.get('/city', CityController.index); 
    router.get('/city/:id', CityController.show); 
    router.post('/city/:id', CityController.store); 
    //another APIs goes here
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening...`)
})