"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constants_1 = require("../helpers/constants");
var currentUser = function (req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    try {
        var payload = jsonwebtoken_1.default.verify(req.session.jwt, process.env[constants_1.EnvVariables.JWT_KEY]);
        req.currentUser = payload;
    }
    catch (err) {
    }
    next();
};
exports.currentUser = currentUser;
