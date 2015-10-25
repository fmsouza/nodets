declare var __dirname: string, process: any;

/**
 * Config class
 * 
 * Responsible for holding all the environment configuration data
 * @class {Config}
 */
export default class Config {
	
	/**
	 * @param {string} root - Absolute path to project source root
	 */
	public static root: string = __dirname;
	
	/**
	 * @param {any} logs - Logs relative paths
	 */
	public static logs: any = {
		runtime: './runtime.log'
	};
	
	/**
	 * @param {string[]} resources - Paths to HTTP resources
	 */
	public static resources: string[] = [
		'main/mainResource'
	];
	
	/**
	 * @param {any} server - HTTP server configuration
	 */
	public static server: any = {
		ip: process.env.NODEJS_SERVER_IP || '0.0.0.0',
		port: process.env.NODEJS_SERVER_PORT || '8080'
	};
}