declare var global, process;
import Logger from '../logger';
import Router from '../router';
import Config from '../../config';

/**
 * Initialize global improved log
 * @return {void}
 */
function initLog(): void {
    if(!global.Log) {
        global.Log = new Logger();
        global.Log.info('Starting server...');
        process.on('uncaughtException', (error: any) => { global.Log.error(error.stack); });
    }
}

/**
 * Initialize global HTTP Server
 * @return {void}
 */
function initServer(): void {
    if(!global.Router) {
        global.Router = new Router();
        global.Router.registerResources(Config.resources);
        global.Router.serve(Config.server.ip, Config.server.port);
    }
}

/**
 * Initialize the application
 * @param {Object} target - Current object instance
 * @param {string} propertyKey - Method/Function name
 * @param {TypedPropertyDescriptor<any>} descriptor - Procedure descriptor
 * @return {void}
 */
export function start(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
    initLog();
    descriptor.value();
}

/**
 * Initialize the application with the HTTP Server
 * @param {Object} target - Current object instance
 * @param {string} propertyKey - Method/Function name
 * @param {TypedPropertyDescriptor<any>} descriptor - Procedure descriptor
 * @return {void}
 */
export function startAPI(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): void {
    initLog();
    initServer();
}