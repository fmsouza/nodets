import Config from '../config';
declare var require, Log;

/**
 * Router class
 * 
 * Responsible for initialize the HTTP Server
 * @class {Router}
 */
export default class Router {
	
	/**
	 * @param {any} driver - The HTTP Server middleware driver
	 */
	private driver: any;
	
	public constructor() {
		var Middleware: any = require('express');
		var compression: any = require('compression');
		this.driver = new Middleware();
		this.use(compression());
	}
	
	/**
	 * Gets the middleware driver instance
	 * @return {any}
	 */
	public get Driver(): any {
		return this.driver;
	}
	
	/**
	 * Sets a global configuration to the server
	 * @param {Function} procedure - Configuration procedure
	 * @return {void}
	 */
	public use(procedure: Function): void {
		this.driver.use(procedure);
	}
	
	/**
	 * Registers a list of resources to handle requests
	 * @param {string[]} resources - Resource path list
	 * @return {void}
	 */
	public registerResources(resources: string[]): void {
		for(var resource of resources) {
			require(`${Config.root}/${resource}`);
			Log.info(`Route registered: ${resource}`);
		}
	}
	
	/**
	 * Starts the server
	 * @param {string} ip - Server bind ip
	 * @param {string} port - Server bind port
	 * @return {void}
	 */
	public serve(ip: string, port: string): void {
		var server = this.driver.listen(port, ip, () => {
			Log.info(`Server binded to http://${server.address().address}:${server.address().port}`);
		});
	}
	
	/**
	 * Stops the server
	 * @return {void}
	 */
	public close(): void {
		this.driver.close(()=>{});
	}
}