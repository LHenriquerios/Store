const { getAllProducts } = require('../services/products');

const listProducts = async (_req, res, _next) => {
    try {
        const products = await getAllProducts();
        return res.status(200).json(products);
    } catch (err) {
        console.log('error list products:', err.message);
    }
};

module.exports = {
    listProducts,
};