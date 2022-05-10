const express = require('express');
const { listProducts, productsById,
    createNewProduct, editProduct, deleteProduct } = require('../../controllers/products');
const { validationName, validationQuantity } = require('../../middlewares/validationProducts');

const productsRouter = express.Router();

productsRouter.get('/', listProducts);
productsRouter.get('/:id', productsById);
productsRouter.post('/', validationName, validationQuantity, createNewProduct);
productsRouter.put('/:id', editProduct);
productsRouter.delete('/:id', deleteProduct);

module.exports = productsRouter;