declare var require, describe, it;
var Assert = require("assert");

describe("Sample test case", () => {
	
	it("should pass", (done) => {
		Assert.equal(true, true);
		done();
	});
	
});