const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../statusCode');

const validationProductId = async (req, res, next) => {
    const [{ productId }] = req.body;

    if (!productId) return res.status(BAD_REQUEST).json({ message: '"productId" is required' });

    next();
};

const validationQuantity = async (req, res, next) => {
    const [{ quantity }] = req.body;

    if (quantity < 1) {
        return res.status(UNPROCESSABLE_ENTITY).json({
            message: '"quantity" must be greater than or equal to 1' });
        }
if (!quantity) return res.status(BAD_REQUEST).json({ message: '"quantity" is required' });

    next();
};

module.exports = {
    validationProductId,
    validationQuantity,
};
