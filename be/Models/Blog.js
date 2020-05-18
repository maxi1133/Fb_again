const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body : String,
  likes : [{id : String , name : String}] ,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

var Blog = mongoose.model("Blog", blogSchema);
// ready to go!

module.exports = Blog