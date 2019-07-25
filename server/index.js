const express  = require('express');
const massive = require('massive');

require('dotenv').config();
const { SERVER_PORT } = process.env;
const { CONNECTION_STRING } = process.env;


const productController = require('./controllers/product_controller');
const inventoryController = require('./controllers/inventory_controller');

const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance=>{
  app.set('db', dbInstance);
  console.log(dbInstance)
  console.log('Connected to the DB');
}).catch(err =>console.log(err));

app.get('/api/inventory', inventoryController.getInventory);

app.post('/api/product', productController.addProduct);
app.get('/api/product/:id', productController.getSingleProduct);
app.delete('/api/product/:id', productController.deleteProduct);
app.put('/api/product/:id',productController.editProduct);

app.listen(SERVER_PORT, ()=>{
  console.log(`Server is listening on ${SERVER_PORT}.`)
})
