const { getAllSales, getSalesById } = require('../services/sales');
const { SUCESS } = require('../statusCode');

const listSales = async (_req, res, next) => {
    try {
        const sales = await getAllSales();
        return res.status(SUCESS).json(sales);
    } catch (err) {
        console.log('error list sales:', err.message);
        next(err);
    }
};

const salesById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sale = await getSalesById(id);
        res.status(SUCESS).json(sale);
    } catch (err) {
        console.log('error sale id:', err.message);
        next(err);
    }
};

module.exports = {
    listSales,
    salesById,
};