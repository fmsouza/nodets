declare var global;
import Logger from '../logger';
import Router from '../router';
import Config from '../../config';

function initLog(): void {
    if(!global.Log) {
        global.Log = new Logger();
        global.Log.info('Starting server...');
    }
}

function initServer(): void {
    if(!global.Router) {
        global.Router = new Router();
        global.Router.registerResources(Config.resources);
        global.Router.serve(Config.server.ip, Config.server.port);
    }
}

export function start(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
    initLog();
    descriptor.value();
}

export function startAPI(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
    initLog();
    initServer();
}