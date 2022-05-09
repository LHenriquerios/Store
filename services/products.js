const { allProducts, productsById } = require('../models/products');
const { NOT_FOUND } = require('../statusCode');

const getAllProducts = async () => {
    const products = await allProducts();
    return products;
};

const getProductsById = async (id) => {
    const product = await productsById(id);
    if (!product) {
        const err = { status: NOT_FOUND, message: 'Product not found' };
        throw err;
    }
    return product;
};

module.exports = {
    getAllProducts,
    getProductsById,
};