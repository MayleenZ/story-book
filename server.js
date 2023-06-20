require("dotenv").config();
require("./config/database"); // connects to db
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

// development port: 3001

// in production we'll a PORT number set in the environment variables

const PORT = process.env.PORT || 3001


// process.env.PORT || 

//* Config

// Logger middleware

app.use(logger("dev"));
app.use(cors());
app.use(express.json());


//used globally across the express app, by putting it here as a middleware function with app.use.. it is registering the middleware to be executed on every incoming request 
app.use(require("./config/checkToken"));

// * All other routes

app.use("/api/users", require("./routes/api/users"));

// app.use('/api/users/login', require('./routes/api/users'))

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
