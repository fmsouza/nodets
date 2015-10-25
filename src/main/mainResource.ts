import {Http} from '../core/decorators';

@Http.base('/hello')
export default class MainResource {
	
	@Http.get('/')
	public static mainRoute(request: any, response: any): void {
		response.send("Hello world!");
	}
}