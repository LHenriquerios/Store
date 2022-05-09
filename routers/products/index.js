const express = require('express');
const { listProducts, productsById } = require('../../controllers/products');

const productsRouter = express.Router();

productsRouter.get('/', listProducts);
productsRouter.get('/:id', productsById);

module.exports = productsRouter;