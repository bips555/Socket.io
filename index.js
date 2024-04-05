const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require('http')
const expressServer = http.createServer(app)

const {Server} = require('socket.io')

const io = new Server(expressServer)
// created object of socket Server

// io.on('connection',(socket)=>
// {

// console.log("New User Connected")
// When the user connects the server in client side.
// eg: when he opens the portal
// connection event

// setTimeout(()=>
// {
//     socket.send("Hello(server to client)")
// },3000)

// setInterval(()=>
// {
//     let date = new Date();
//     let time = date.getTime()
//     socket.send(time);

// },1000)

// setInterval(()=>
// {
//     let date = new Date();
//     let time = date.getTime()
//     socket.emit("myEvent",time);
// emit method helps to create custom event

// },1000)
// socket.on('myEvent',(msg)=>
// {
//     console.log(msg)
// })
// })

// io.on('connection',(socket)=>
// {
// io.sockets.emit("myBroadcastEvent","Hello All")
// })

let buyNsp = io.of("/buy")

buyNsp.on("connection",(socket)=>
{
   buyNsp.emit('myEvent',"Hello? Are you Buying?")
})

let sellNsp = io.of("/sell")

sellNsp.on("connection",(socket)=>
{
   sellNsp.emit('myEvent',"Hello? Are you Selling?")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000, ()=>
{
    console.log("Server is running on port 3000")
})