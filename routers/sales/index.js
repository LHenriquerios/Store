const express = require('express');
const { listSales, salesById } = require('../../controllers/sales');

const salesRouter = express.Router();

salesRouter.get('/', listSales);
salesRouter.get('/:id', salesById);

module.exports = salesRouter;