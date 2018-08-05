// const http = require('http');

// const server = http.createServer(function(req, res) {
//     res.write('<h1>hello</h1>');
// });

// server.listen(8080);

// use express

const express = require('express');
const app = express();

app.listen(3030, function() {
    console.log("server port: 3030");
})