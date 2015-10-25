import {Http} from '../core/decorators';

/**
 * MainResource class
 * 
 * Configure routes to respond to '/hello' and below
 * @class {MainResource}
 */
@Http.base('/hello')
export default class MainResource {
	
	/**
	 * Responds to '/hello' and answers with 'Hello world!' text
	 * @param {any} request - request data object
	 * @param {any} response - response data object
	 * @return {void}
	 */
	@Http.get('/')
	public static mainRoute(request: any, response: any): void {
		response.send('Hello world!');
	}
}