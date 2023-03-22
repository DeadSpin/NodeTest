const validator = require('../../shared/validator');

const customMessage = {
    required: 'You forgot to give a :attribute',
    email: "Email must be valid to notify you in future",
    min: "Give a storng password more than 6 digit",
    string: "Must be an string",
    confirmed: "Both password should be same"
}

const signup = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "name": "required|string",
        "password": "required|string|min:6|confirmed"
    }

    validator(req.body, validationRule, customMessage, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

const login = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "password": "required|string|min:6"
    }

    validator(req.body, validationRule, customMessage, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = { signup, login }