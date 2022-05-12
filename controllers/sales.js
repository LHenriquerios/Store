const service = require('../services/sales');
const { SUCESS, CREATED } = require('../statusCode');

const listSales = async (_req, res) => {
        const sales = await service.getAllSales();
        return res.status(SUCESS).json(sales);
};

const salesById = async (req, res) => {
        const { id } = req.params;
        const sale = await service.getSalesById(id);
        return res.status(SUCESS).json(sale);
};

const createSale = async (req, res) => {
        const newSale = await service.createSale(req.body);
        return res.status(CREATED).json(newSale);
};

const editSale = async (req, res) => {
    const { id } = req.params;
    let [obj] = req.body;
    obj = { id, ...obj };
    const editedSale = await service.editSale(obj);
    return res.status(SUCESS).json(editedSale);
};

module.exports = {
    listSales,
    salesById,
    createSale,
    editSale,
};