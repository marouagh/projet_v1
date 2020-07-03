const {check, validationResult} = require('express-validator')

exports.validateExperienceInput = () =>
    
    [check('title', 'Job title field is required !').notEmpty(),
    check('company', 'this field is required !').notEmpty(),
    check('from', 'this field is required !').notEmpty()]
    
exports.validators = (req, res, next) =>{
    const errors = validationResult(req)
    errors.isEmpty() ? next(): res.status(400).json({errors: errors.mapped()})
}
