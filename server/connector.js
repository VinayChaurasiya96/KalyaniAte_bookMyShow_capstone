require("dotenv").config();
const mongoose = require("mongoose");
const {bookMovieSchema} = require("./models/bookMovieSchema");

const mongoURI = process.env.MONGO_URI;

// Establishing connection with MongoDB database
mongoose
  .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connection established with mongodb server online ");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });
let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);

exports.connection = collection_connection;
