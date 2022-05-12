const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../../controllers/sales');
// const { validationProductId, validationQuantity } = require('../../middlewares/validationSales');
const { validateSale } = require('../../schemas/schemasJoi');
const validateJoiSale = require('../../middlewares/validateJoiSale');

const salesRouter = express.Router();

salesRouter.get('/', rescue(saleController.listSales));
salesRouter.get('/:id', rescue(saleController.salesById));
salesRouter.post('/', validateJoiSale(validateSale), rescue(saleController.createSale));

module.exports = salesRouter;