const {connection} = require("../connector");

// book movie controller
const bookMovie = async (req, res) => {
  // using try catch for error logging
  try {
    const newBooking = new connection({
      ...req.body,
    });

    const bookingData = await newBooking.save();
    res.status(200).send({message: "booking successfull"});
  } catch (error) {
    res.send(error.message);
    console.log("something went wrong", error);
  }
};

// get last movie controller
const getLastBooking = async (req, res) => {
  try {
    const bookings = await connection.find().sort({createdAt: 1}); // here we are getting all booked movie first , and then sort it by createdAt "date and time"
    const lastbooking = bookings[bookings.length - 1]; // here we are getting last booked movie details by array method
    if (lastbooking) {
      res.send(lastbooking);
    } else {
      res.send({message: "no previous booking found"});
    }
  } catch (error) {
    res.send(error.message);
    console.log("something went wrong", error.message);
  }
};

module.exports.bookMovie = bookMovie;
module.exports.getLastBooking = getLastBooking;
