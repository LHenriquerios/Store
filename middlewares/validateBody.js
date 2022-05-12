const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../statusCode');

module.exports = (schemas) => (req, _res, next) => {
    req.body.forEach((element) => {
    const { error } = schemas.validate(element);

    if (error) {
    switch (error.details[0].type) {
        case 'any.required':
            next({ status: BAD_REQUEST, message: error.details[0].message });
            break;
        case 'string.min':
            next({ status: UNPROCESSABLE_ENTITY, message: error.details[0].message });
            break;
        case 'number.min':
            next({ status: UNPROCESSABLE_ENTITY, message: error.details[0].message });
            break;
        default: console.log(error.details[0].message);
    }
}
});
    next();
};