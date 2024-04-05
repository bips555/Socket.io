const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require('http')
const expressServer = http.createServer(app)

const {Server} = require('socket.io')

const io = new Server(expressServer)
// created object of socket Server

io.on('connection',(socket)=>
{

console.log("New User Connected")
// When the user connects the server in client side.
// eg: when he opens the portal
// connection event

setTimeout(()=>
{
    socket.send("Hello(server to client)")
},10000)
})







app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000, ()=>
{
    console.log("Server is running on port 3000")
})