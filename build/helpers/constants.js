"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvVariables = void 0;
var EnvVariables = /** @class */ (function () {
    function EnvVariables() {
    }
    /**
     * A jwt signing key that is created in docker kubernetes and used in depl.yaml files
     * Used for authentication
     */
    EnvVariables.JWT_KEY = 'JWT_KEY';
    /**
     * An environment variable that holds the url to a mongo database
     */
    EnvVariables.MONGO_URI = 'MONGO_URI';
    return EnvVariables;
}());
exports.EnvVariables = EnvVariables;
