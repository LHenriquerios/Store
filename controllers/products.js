const { getAllProducts, getProductsById } = require('../services/products');
const { SUCESS } = require('../statusCode');

const listProducts = async (_req, res, next) => {
    try {
        const products = await getAllProducts();
        return res.status(SUCESS).json(products);
    } catch (err) {
        console.log('error list products:', err.message);
        next(err);
    }
};

const productsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await getProductsById(id);
        res.status(SUCESS).json(product);
    } catch (err) {
        console.log('error product id:', err.message);
        next(err);
    }
};

module.exports = {
    listProducts,
    productsById,
};