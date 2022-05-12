const service = require('../services/sales');
const { SUCESS, CREATED } = require('../statusCode');

const listSales = async (_req, res) => {
        const sales = await service.getAllSales();
        return res.status(SUCESS).json(sales);
};

const salesById = async (req, res) => {
        const { id } = req.params;
        const sale = await service.getSalesById(id);
        res.status(SUCESS).json(sale);
};

const createSale = async (req, res) => {
        const newSale = await service.createSale(req.body);
        return res.status(CREATED).json(newSale);
};

module.exports = {
    listSales,
    salesById,
    createSale,
};