const connection = require('./connection');

const allSales = async () => {
    const query = `SELECT * FROM StoreManager.sales, StoreManager.sales_products 
    WHERE sales.id = sales_products.sale_id 
    ORDER BY sales_products.sale_id, sales_products.product_id;`;
    const [data] = await connection.execute(query);
    const result = data.map((e) => ({
    saleId: e.sale_id,
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
    }));
    return result;
};

const salesById = async (id) => {
    const query = `SELECT * FROM StoreManager.sales, StoreManager.sales_products 
    WHERE sales.id = sales_products.sale_id AND sale_id = ?
    ORDER BY sales_products.sale_id, sales_products.product_id;`;
    const [data] = await connection.execute(query, [id]);
    const result = data.map((e) => ({
    date: e.date,
    productId: e.product_id,
    quantity: e.quantity,
    }));
    return result;
};

const createSale = async () => {
    const query = 'INSERT INTO  StoreManager.sales (date) VALUES (now());';
    const [data] = await connection.execute(query);
    return data.insertId;
};

const createSaleProduct = async (id, productId, quantity) => {
    const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
        VALUES (?, ?, ?)`;

    await connection.execute(query, [id, productId, quantity]);
    return { productId, quantity };
};

module.exports = {
    allSales,
    salesById,
    createSale,
    createSaleProduct,
};