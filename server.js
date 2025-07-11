const http = require('http');
const port = process.env.PORT | 3000;
const app = require('./app')
//server creation
const server = http.createServer(app)
server.listen(port,()=>{
    console.log('App successfully initialised on port :', port);
});