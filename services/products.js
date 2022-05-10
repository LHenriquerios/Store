const { allProducts, productsById, createProduct } = require('../models/products');
const { NOT_FOUND, CONFLICT } = require('../statusCode');

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

const registerProduct = async (product) => {
    const { name, quantity } = product;

    const products = await allProducts();
    const exist = products.find((e) => e.name === name);
    if (exist) {
        const err = { status: CONFLICT, message: 'Product already exists' };
        throw err;
    }
    
    const registered = await createProduct(name, quantity);
    return registered;
};

module.exports = {
    getAllProducts,
    getProductsById,
    registerProduct,
};