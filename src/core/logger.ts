import {File} from './file';
import {Config} from '../config';

export class Logger {
	
	private fs: File;
	
	public constructor(path?: string) {
		if(!path) path = Config.logs.runtime;
		this.fs = new File(path);
	}
	
	public alert(content: string): void {
		this.log(content, 'ALERT');
	}
	
	public error(content: string): void {
		this.log(content, 'ERROR');
	}
	
	public info(content: string): void {
		this.log(content);
	}
	
	public log(content: string, level?: string): void {
		if(!level) level = 'INFO';
		var text: string = `[${new Date().toISOString()}] (${level}) ${content}`;
		console.log(text);
		this.fs.append(text);
	}
}