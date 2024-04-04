const express = require("express");
const app = express();
const http = require('http')
const expressServer = http.createServer(app)

const {Server} = require('socket.io')

const io = new Server(expressServer)
// created object of socket Server





app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000, ()=>
{
    console.log("Server is running on port 3000")
})