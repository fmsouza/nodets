declare var Router, Log;

export default class Http {
    
    public static use(uri: string): void {}
    
    public static get(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            Router.Driver.get(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (GET)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static post(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            Router.Driver.post(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (POST)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static put(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            Router.Driver.put(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (PUT)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static delete(uri: string): Function {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            Router.Driver.delete(uri, (request: any, response: any) => {
                Log.info(`Serving request to '${request.originalUrl}' (DELETE)`);
                descriptor.value(request, response);
            });
            return descriptor;
        };
    }
    
    public static header(key: string, value: string): TypedPropertyDescriptor<any> {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            Router.Driver.use( (request, response, next) => {
                response.header(key, value);
                next();
            });
            return descriptor;
        };
    }
}