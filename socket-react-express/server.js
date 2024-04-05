const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(expressServer);
const path = require('path')


app.use(express.static('client/build'))

app.get('*',(req,res)=>
{
res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

app.get("/express-server", (req, res) => {
  res.end("This is my backend");
});

io.on("connection", (socket) => {
  console.log("New User connected");
  setTimeout(()=>
  {
socket.emit('msg',"this is message from server to client")
  },1000)
  socket.on("disconnect", () => {
    console.log("User discoonected");
  });
});

expressServer.listen(5000, () => {
  console.log("Server is running on port 5000");
});
