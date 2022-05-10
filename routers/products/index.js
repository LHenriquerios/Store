const express = require('express');
const { listProducts, productsById, createNewProduct } = require('../../controllers/products');
const { validationName, validationQuantity } = require('../../middlewares/validationProducts');

const productsRouter = express.Router();

productsRouter.get('/', listProducts);
productsRouter.get('/:id', productsById);
productsRouter.post('/', validationName, validationQuantity, createNewProduct);

module.exports = productsRouter;