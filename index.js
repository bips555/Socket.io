//just for learning about socket, we simply used javascript in this index.js. index.js was server for our application where we integrated socket with htt express server //
// const express = require("express");
// const app = express();
// const http = require("http");
// const expressServer = http.createServer(app);

// const { Server } = require("socket.io");

// const io = new Server(expressServer);
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

// let buyNsp = io.of("/buy")

// buyNsp.on("connection",(socket)=>
// {
//    buyNsp.emit('myEvent',"Hello? Are you Buying?")
// })

// let sellNsp = io.of("/sell")

// sellNsp.on("connection",(socket)=>
// {
//    sellNsp.emit('myEvent',"Hello? Are you Selling?")
// })

// io.on("connection", (socket) => {
//   socket.on("chat", (msg) => {
//     console.log(msg);
//     io.emit("chat_send", msg);
//   });
// });

// io.on('connection',(socket)=>
// {

// socket.join('kitchen-room')
// let countofkitchen = io.sockets.adapter.rooms.get('kitchen-room').size;
// io.sockets.in('kitchen-room').emit('cooking','fried rice cooking ='+countofkitchen)
// socket.join('bed-room')
// io.sockets.in('bed-room').emit('sleep','i am sleeping')
// })

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// expressServer.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
