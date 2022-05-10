const service = require('../services/products');
const { SUCESS, CREATED } = require('../statusCode');

const listProducts = async (_req, res, next) => {
    try {
        const products = await service.getAllProducts();
        return res.status(SUCESS).json(products);
    } catch (err) {
        console.log('error list products:', err.message);
        next(err);
    }
};

const productsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await service.getProductsById(id);
        return res.status(SUCESS).json(product);
    } catch (err) {
        console.log('error product id:', err.message);
        next(err);
    }
};

const createNewProduct = async (req, res, next) => {
    try {
        const newProduct = await service.registerProduct(req.body);
        return res.status(CREATED).json(newProduct);
    } catch (err) {
        console.log('error create new product:', err.message);
        next(err);
    }
};

const editProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        let obj = req.body;
        obj = { id, ...obj };
        const editedProduct = await service.updateProduct(obj);
        res.status(SUCESS).json(editedProduct);
    } catch (err) {
        console.log('error edit product:', err.message);
        next(err);
    }
};

module.exports = {
    listProducts,
    productsById,
    createNewProduct,
    editProduct,
};