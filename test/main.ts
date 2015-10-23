declare var it, describe, require;
var Assert = require('assert');

describe('Sample test', () => {
	
	it('should be true', (done) => {
		Assert.equal(true, true);
		done();
	});
});