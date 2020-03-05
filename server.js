const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:Bradford321*@ds213255.mlab.com:13255/heroku_h7d2qb8q";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
