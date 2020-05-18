const express = require("express");
const app = express();


////////////// middle ware
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());


////////////// ROUTE
app.use("/", (req, res) => {
    res.send('Welcome !')
});


/////////////////   SERVER
const port = 4000;
var http = require("http");
var server = http.createServer(app);
server.listen(port, () => {
  console.log("server listen on port :" + port);
});


/////////////////   SOCKET IO
const io = require("socket.io").listen(server);

io.on("connection", (socket) => {


    socket.on("disconect", () => {

    });
});
