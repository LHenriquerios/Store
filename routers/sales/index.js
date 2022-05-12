const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../../controllers/sales');
// const { validationProductId, validationQuantity } = require('../../middlewares/validationSales');
const { validateSale } = require('../../schemas/schemasJoi');
const validateJoi = require('../../middlewares/validateJoi');
const validateBody = require('../../middlewares/validateBody');

const salesRouter = express.Router();

salesRouter.get('/', rescue(saleController.listSales));
salesRouter.get('/:id', rescue(saleController.salesById));
salesRouter.post('/', rescue(validateBody), validateJoi(validateSale));

module.exports = salesRouter;