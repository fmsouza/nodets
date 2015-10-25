import {startAPI} from './core/decorators';

/**
 * App class
 *
 * Contains the bootstrapper procedure
 * @class {App}
 */
class App {
	
	/**
	 * Starts the application
	 * The decorator @startAPI initialize the webserver middleware to start serving data
	 * @return {void}
	 */
	@startAPI
	public static main(): void {}
}