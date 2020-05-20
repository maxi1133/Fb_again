const express = require("express");
const app = express();





////////////// middle ware
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());





//////////////// Connect DB
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://maxi1133:123456789z@cluster0-jskdr.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })





//////////////      ROUTE
const AccountRoute = require('./func/AcountFunc')
app.use('/Account',AccountRoute)





//////////////      SERVER
const port = 4000;
var http = require("http");
var server = http.createServer(app);
server.listen( port, () => { console.log("Server listen on port : " + port) } );






/////////////////   SOCKET IO
const io = require("socket.io").listen(server);

io.on("connection", (socket) => {
  socket.on("disconect", () => {});
});
