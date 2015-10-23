declare var require, Log;

import {Config} from '../config';

export class Router {
	
	private driver: any;
	
	public constructor() {
		var Middleware: any = require('express');
		var compression: any = require('compression');
		this.driver = new Middleware();
		this.use(compression());
	}
	
	public get Driver() {
		return this.driver;
	}
	
	public use(procedure: Function): void {
		this.driver.use(procedure);
	}
	
	public registerResources(resources: string[]): void {
		for(var resource of resources) {
			require(`${Config.root}/${resource}`);
			Log.info(`Route registered: ${resource}`);
		}
	}
	
	public serve(ip: string, port: string): void {
		var server = this.driver.listen(port, ip, () => {
			Log.info(`Server binded to http://${server.address().address}:${server.address().port}`);
		});
	}
	
	public close(): void {
		this.driver.close(()=>{});
	}
}