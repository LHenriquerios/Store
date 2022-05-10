const express = require('express');
const { listProducts, productsById,
    createNewProduct, editProduct } = require('../../controllers/products');
const { validationName, validationQuantity } = require('../../middlewares/validationProducts');

const productsRouter = express.Router();

productsRouter.get('/', listProducts);
productsRouter.get('/:id', productsById);
productsRouter.post('/', validationName, validationQuantity, createNewProduct);
productsRouter.put('/:id', editProduct);

module.exports = productsRouter;