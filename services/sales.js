const modelSales = require('../models/sales');
const { NOT_FOUND } = require('../statusCode');

const getAllSales = async () => {
    const sales = await modelSales.allSales();
    return sales;
};

const getSalesById = async (id) => {
    const sale = await modelSales.salesById(id);
    if (sale.length === 0) {
        const err = { status: NOT_FOUND, message: 'Sale not found' };
        throw err;
    }
    return sale;
};

const createSale = async (sale) => {
    const { productId, quantity } = sale;
    const createdSale = await modelSales.createSale(productId, quantity);
    console.log(createdSale);
    return createdSale;
};

module.exports = {
    getAllSales,
    getSalesById,
    createSale,
};