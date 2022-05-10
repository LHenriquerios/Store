const express = require('express');
const { listSales, salesById } = require('../../controllers/sales');
const { validationProductId, validationQuantity } = require('../../middlewares/validationSales');

const salesRouter = express.Router();

salesRouter.get('/', listSales);
salesRouter.get('/:id', salesById);
salesRouter.post('/', validationProductId, validationQuantity);

module.exports = salesRouter;