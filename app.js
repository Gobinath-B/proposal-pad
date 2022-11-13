var express = require("express");
require("dotenv").config();
var app = express();

const port = process.env.PORT;

var routing = require("./router.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/", routing);

app.listen(port, () => {
  console.log("Running...", port);
});
