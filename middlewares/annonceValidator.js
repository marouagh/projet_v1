const {check, validationResult} = require('express-validator')

exports.validateAnnonceInput = () =>
    
    [check('ref', 'ref field is required !').notEmpty(),
    check('email', 'this field is required !').notEmpty(),
    check('description', 'this field is required !').notEmpty(),
    check('deadline', 'this field is required !').notEmpty(),
    check('name', 'this field is required !').notEmpty()]

exports.validator = (req, res, next) =>{
    const errors = validationResult(req)
    errors.isEmpty() ? next(): res.status(400).json({errors: errors.mapped()})
}
