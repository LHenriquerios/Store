const connection = require('./connection');

const allProducts = async () => {
    const query = 'SELECT * FROM StoreManager.products';
    const [data] = await connection.execute(query);
    return data;
};

const productsById = async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [data] = await connection.execute(query, [id]);
    return data[0];
};

const createProduct = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
    const [data] = await connection.execute(query, [name, quantity]);
    return {
        id: data.insertId,
        name,
        quantity,
    };
};

module.exports = {
    allProducts,
    productsById,
    createProduct,
};