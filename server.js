const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require('./routes/index');
require("dotenv").config();
const cors = require('cors');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.DB_HOST, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
// .then(res => console.log(res))
// .catch(err => console.log(err));



// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
