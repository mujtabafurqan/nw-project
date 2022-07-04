const express = require("express");
const cors = require("cors");
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: __dirname+'/.env'});
}

const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/",require("./routes/question"));
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mujtabaMongo:passwordkyahai@cluster0.mko8b.mongodb.net/buildspace?retryWrites=true&w=majority');
var db = mongoose.connection;

db.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// static files (build of your frontend)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend', 'build')));
//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
//   })
// }


app.use(express.static(path.join(__dirname, './frontend/build')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend", "build", "index.html"));
});

