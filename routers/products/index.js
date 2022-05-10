const express = require('express');
const { listProducts, productsById } = require('../../controllers/products');
const { validationName, validationQuantity } = require('../../middlewares/validationProducts');

const productsRouter = express.Router();

productsRouter.get('/', listProducts);
productsRouter.get('/:id', productsById);
productsRouter.post('/', validationName, validationQuantity);

module.exports = productsRouter;