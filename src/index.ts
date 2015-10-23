import {startAPI} from './core/decorators';

class App {
	
	@startAPI
	public static main(): void {}
}