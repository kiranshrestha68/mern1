const dotenv = require('dotenv');
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth')); //we link the router files for the router

const PORT = process.env.PORT;


// app.get("/", (req, res) => {
//   res.send(`hello world from server`);
// });

app.get("/about", (req, res) => {
  res.send(`hello world from aavout server`);
});
app.get("/contact", (req, res) => {
  res.send(`hello world from contact server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
