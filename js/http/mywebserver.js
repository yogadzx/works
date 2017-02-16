/**
 * Created by youngdzx on 11/23/16.
 */
var http = require('http');
var serv = http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<marquee>Smashing Node!</marquee>');
});
serv.listen(3000);
