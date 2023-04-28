const express = require("express");
const {
  bookMovie,
  getLastBooking,
} = require("../controllers/bookMovieController");

//using express router
const router = express.Router();

//book movie route with post method
router.route("/booking").post(bookMovie);

//get last booked movie details route with get method
router.route("/booking").get(getLastBooking);

module.exports = router;
