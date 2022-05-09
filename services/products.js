const { allProducts } = require('../models/products');

const getAllProducts = async () => {
    const products = await allProducts();
    return products;
};

module.exports = {
    getAllProducts,
};