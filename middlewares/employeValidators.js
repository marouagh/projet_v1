const {check, validationResult} = require('express-validator')

exports.validateProfileInput = () =>
    check('status', 'this field is required !').notEmpty(),
    
    
exports.validator = (req, res, next) =>{
    const errors = validationResult(req)
    errors.isEmpty() ? next(): res.status(400).json({errors: errors.mapped()})
}
