// var http = require('http');

// http.createServer(function(req, res){
//     res.end("hello server!");
// }).listen(8089);

// console.log("server running on http://localhost:8089");

var moment = require("moment");
var salam = require("./salam");


console.log(salam.salamPagi());
console.log("sekarang: "+ moment().format('D MMMM YYYY, h:mm:ss a'));