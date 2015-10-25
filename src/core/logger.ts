import File from './file';
import Config from '../config';

/**
 * Logger class
 * 
 * Improved logging interface
 * @class {Logger}
 */
export default class Logger {
	
	/**
	 * @param {File} fs - File object to store log
	 */
	private fs: File;
	
	public constructor(path?: string) {
		if(!path) path = Config.logs.runtime;
		this.fs = new File(path);
	}
	
	/**
	 * Displays an alert level log
	 * @param {string} content - Log message
	 * @return {void}
	 */
	public alert(content: string): void {
		this.log(content, 'ALERT');
	}
	
	/**
	 * Displays an error level log
	 * @param {string} content - Log message
	 * @return {void}
	 */
	public error(content: string): void {
		this.log(content, 'ERROR');
	}
	
	/**
	 * Displays an information level log
	 * @param {string} content - Log message
	 * @return {void}
	 */
	public info(content: string): void {
		this.log(content);
	}
	
	/**
	 * Displays an custom level log
	 * @param {string} content - Log message
	 * @param {string} level - Log level (Optional)
	 * @return {void}
	 */
	public log(content: string, level?: string): void {
		if(!level) level = 'INFO';
		var text: string = `[${new Date().toISOString()}] (${level}) ${content}`;
		console.log(text);
		this.fs.append(text);
	}
}