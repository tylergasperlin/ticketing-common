export class EnvVariables {

    /**
     * A jwt signing key that is created in docker kubernetes and used in depl.yaml files
     * Used for authentication
     */
    static readonly JWT_KEY = 'JWT_KEY';

    /**
     * An environment variable that holds the url to a mongo database
     */
    static readonly MONGO_URI = 'MONGO_URI'
}

