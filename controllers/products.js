const { getAllProducts, getProductsById, registerProduct } = require('../services/products');
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
        return res.status(SUCESS).json(product);
    } catch (err) {
        console.log('error product id:', err.message);
        next(err);
    }
};

const createNewProduct = async (req, res, next) => {
    try {
        const newProduct = await registerProduct(req.body);
        return res.status(SUCESS).json(newProduct);
    } catch (err) {
        console.log('error create new product:', err.message);
        next(err);
    }
};

module.exports = {
    listProducts,
    productsById,
    createNewProduct,
};