module.exports = (req, _res, next) => {
    if (Array.isArray(req.body)) {
        [req.body] = req.body;
        next();
    }
    throw new Error();
};