declare var require;
/**
 * Manipulates files
 * @class File
 */
export class File {
    
    private directory: string;
    private file: string;
    private fs: any;
    private fullPath: string;

    public constructor(path: string) {
        this.fullPath = path;
        var splittedPath: string[] = path.split('/');
        this.file = splittedPath.pop();
        this.directory = splittedPath.join('/');
        this.fs = require("fs-extra");
		this.fs.ensureFileSync(this.fullPath);
    }
    
    /**
     * Get the full file path
     * @return {string}
     */
    public getFilePath(): string {
        return this.fullPath;
    }
    
    /**
     * Get the directory where the file is
     * @return {string}
     */
    public getDirPath(): string {
        return this.directory;
    }
    
    /**
     * Get the file name
     * @return {string}
     */
    public getFileName(): string {
        return this.file;
    }

    /**
     * Appends content to end of file
     * @param {string} content - Content to be written to the file
	 * @param {Function} callback - (error, response)=>void (Optional
	 * @return {void}
     */
    public append(content: string): void {
        this.fs.appendFileSync(this.fullPath, `${content}\n`);
    }

    /**
     * Writes the given content to a file. Ovewrites if it already has any content.
     * @param {string} content - Content to be written to the file
	 * @param {Function} callback - (error, response)=>void (Optional
	 * @return {void}
     */
    public write(content: string): void {
        this.fs.outputFileSync(this.fullPath, `${content}\n`);
    }

    /**
     * Reads the file content
     * @return {string}
     */
    public read(): string {
        return this.fs.readFileSync(this.fullPath, 'utf8');
    }
}