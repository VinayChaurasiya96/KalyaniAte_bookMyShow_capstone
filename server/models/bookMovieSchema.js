const {Schema} = require("mongoose");

// schema for book movie
const bookMovieSchema = new Schema(
  {
    movie: {type: String, required: true},
    slot: {type: String, required: true},
    seats: {
      A1: {type: Number, required: true, max: 20},
      A2: {type: Number, required: true, max: 20},
      A3: {type: Number, required: true, max: 20},
      A4: {type: Number, required: true, max: 20},
      D1: {type: Number, required: true, max: 20},
      D2: {type: Number, required: true, max: 20},
    },
  },

  {timestamps: true}
);

exports.bookMovieSchema = bookMovieSchema;
