const connection = require('./connection');

const allProducts = async () => {
    const query = 'SELECT * FROM StoreManager.products';
    const [data] = await connection.execute(query);
    return data;
};

const productsById = async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [product] = await connection.execute(query, [id]);
    return product[0];
};

module.exports = {
    allProducts,
    productsById,
};