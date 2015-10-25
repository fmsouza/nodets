declare var Router, Log, require, Symbol;
const express = require('express');
const SYMBOL = Symbol();
const middleware = express();

/**
 * Http decorator class
 * 
 * Holds all the main HTTP methods to use as decorators to the Resources procedures
 * @class {Http}
 */
export default class Http {

    /**
     * Class-level decorator used to declare the class as a sub-router
     * @param {string} uri - URL group which the procedures will respond to
     * @return {Function}
     */
    public static base(uri: string): Function {
        return function(target: Function) {
            target.prototype[SYMBOL] = Router.Driver.use(uri, middleware);
        };
    }

    /**
     * Responds to DELETE method
     * @param {string} uri - URL path do respond to
     * @return {Function}
     */
    public static delete(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.delete(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (DELETE)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }

    /**
     * Sets a header configuration to the procedure
     * @param {string} key - Header key
     * @param {string} value - Header value
     * @return {TypedPropertyDescriptor<any>}
     */
    public static header(key: string, value: string): TypedPropertyDescriptor<any> {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.use( (request, response, next) => {
                response.header(key, value);
                next();
            });
            return descriptor;
        };
    }

    /**
     * Responds to GET method
     * @param {string} uri - URL path do respond to
     * @return {Function}
     */
    public static get(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.get(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (GET)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }

    /**
     * Responds to POST method
     * @param {string} uri - URL path do respond to
     * @return {Function}
     */
    public static post(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.post(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (POST)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }

    /**
     * Responds to PUT method
     * @param {string} uri - URL path do respond to
     * @return {Function}
     */
    public static put(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.put(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (PUT)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }

    /**
     * Configures a procedure to be executed before every method handling in the current route
     * @param {Object} target - Current object instance
     * @param {string} propertyKey - Method/Function name
     * @param {TypedPropertyDescriptor<any>} descriptor - Procedure descriptor
     * @return {void}
     */
    public static use(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
        middleware.use( (request: any, response: any, next: any) => {
            descriptor.value(request, response, next);
        });
    }
}