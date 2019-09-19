const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5001

app.use(bodyParser.json())

app.get('/', (req, res) => {
        return res.send('Categories menu : /categories/:id'
        )
    })

//controllers
const CategoriesController = require('./controllers/categories')
const CategorieMenusController = require('./controllers/categorieMenus')
const menuController =  require('./controllers/menu')
const transactionController =  require('./controllers/transaction')
const orderController =  require('./controllers/order')

app.group("/api/v1", (router) => {


    //todos API
    router.get('/categories', CategoriesController.index); 
    router.get('/categorie/:id', CategoriesController.show); 
    router.post('/categorie', CategoriesController.store);
    router.patch('/categories/:id', CategoriesController.update); 
    router.delete('/categories/:id', CategoriesController.delete);

    router.get('/categorie/menus/:created_by',CategorieMenusController.show);

    router.get('/menus', menuController.index);  
    router.get('/menu/:id', menuController.show); 
    router.get('/menus/:id', menuController.list); 
    router.post('/menu', menuController.store);
    router.patch('/menu/:id', menuController.update); 
    router.delete('/menu/:id', menuController.delete);


    router.get('/orders', orderController.index); 
    router.get('/order/:id', orderController.show); 
    router.post('/order', orderController.store);
    router.patch('/order/:id', orderController.update); 
    router.delete('/order/:id', orderController.delete);

    router.get('/transactions', transactionController.index);
    router.get('/transaction/order/:id', transactionController.show); 
    router.post('/transaction', transactionController.store);
    router.patch('/transaction/:id', transactionController.update); 
    //another APIs goes here
})

app.listen(process.env.PORT || 5001, () => {
    console.log(`Listening...${port}`)
})