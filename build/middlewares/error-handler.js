"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
var errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        var errors = err.serializeErrors();
        return res.status(err.statusCode).send({ errors: errors });
    }
    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
    });
};
exports.errorHandler = errorHandler;
