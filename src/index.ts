declare var global, require, process;
global.Config = require("./config");
try{
	require("./app").main(process.argv);
} catch(e){
	console.log("Fatal: "+e.stack);
	process.exit(1);
}