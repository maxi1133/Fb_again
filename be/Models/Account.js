const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var AccountSchema = new Schema({
  taikhoan: String,
  matkhau: String,
  ho: String,
  ten: String,
  ngaysinh: Date,

});

var Account = mongoose.model("Account",AccountSchema)

module.exports = Account