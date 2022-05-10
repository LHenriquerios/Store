const { allSales, salesById } = require('../models/sales');
const { NOT_FOUND } = require('../statusCode');

const getAllSales = async () => {
    const sales = await allSales();
    return sales;
};

const getSalesById = async (id) => {
    const sale = await salesById(id);
    console.log(sale);
    if (sale.length === 0) {
        const err = { status: NOT_FOUND, message: 'Sale not found' };
        throw err;
    }
    return sale;
};

module.exports = {
    getAllSales,
    getSalesById,
};