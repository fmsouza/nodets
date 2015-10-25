declare var Router, Log, require, Symbol;
const express = require('express');
const SYMBOL = Symbol();
const middleware = express();

export default class Http {

    public static base(uri: string): Function {
        return function(target: Function) {
            target.prototype[SYMBOL] = Router.Driver.use(uri, middleware);
        };
    }
    
    public static use(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
        middleware.use( (request: any, response: any, next: any) => {
            descriptor.value(request, response, next);
        });
    }
    
    public static get(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.get(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (GET)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static post(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.post(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (POST)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static put(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.put(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (PUT)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static delete(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.delete(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (DELETE)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static header(key: string, value: string): TypedPropertyDescriptor<any> {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            middleware.use( (request, response, next) => {
                response.header(key, value);
                next();
            });
            return descriptor;
        };
    }
}