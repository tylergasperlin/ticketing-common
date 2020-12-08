interface ISerializeErrorResponse {
    message: string;
    field?: string;
}
export declare abstract class CustomError extends Error {
    constructor(message: string);
    abstract statusCode: number;
    abstract serializeErrors(): ISerializeErrorResponse[];
}
export {};
