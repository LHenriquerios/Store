const express = require('express');
const { listProducts } = require('../../controllers/products');

const productsRouter = express.Router();

productsRouter.get('/', listProducts);

module.exports = productsRouter;