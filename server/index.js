const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const bookMovieRouter = require("./routes/bookMovieRoutes");
const cors = require("cors");
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

// all routers use here
app.use("/api", bookMovieRouter);

//initializing local server
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
