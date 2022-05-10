const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../statusCode');

const validationName = async (req, res, next) => {
    const { name } = req.body;

    if (!name) return res.status(BAD_REQUEST).json({ message: '"name" is required' });
    if (name.length < 5) {
        return res.status(UNPROCESSABLE_ENTITY).json({
            message: '"name" length must be at least 5 characters long' });
    }

    next();
};

const validationQuantity = async (req, res, next) => {
    const { quantity } = req.body;

    if (quantity < 1) {
        return res.status(UNPROCESSABLE_ENTITY).json({
            message: '"quantity" must be greater than or equal to 1' });
        }
if (!quantity) return res.status(BAD_REQUEST).json({ message: '"quantity" is required' });

    next();
};

module.exports = {
    validationName,
    validationQuantity,
};