declare var __dirname: string, process: any;

export default class Config {
	
	public static root: string = __dirname;
	
	public static logs: any = {
		runtime: './runtime.log'
	};
	
	public static resources: string[] = [
		'main/mainResource'
	];
	
	public static server: any = {
		ip: process.env.NODEJS_SERVER_IP || '0.0.0.0',
		port: process.env.NODEJS_SERVER_PORT || '8080'
	};
}