const express = require("express");
const app = express();
const mongoose = require('mongoose')

////////////// middle ware
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

////monggoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

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
