const {check, validationResult} = require('express-validator')

exports.registerRules = () =>[
    check('name', 'this field is required !').notEmpty(),
    check('email', 'this field is required !').notEmpty(),
    check('email', 'this field should be a valid email').isEmail(),
    check('password', 'this field required a char min').isLength({
        min: 4,
    })
]

exports.validator = (req, res, next) =>{
    const errors = validationResult(req)
    errors.isEmpty() ? next(): res.status(400).json({errors: errors.mapped()})
}