var express = require("express");
var app = express();

var routing = require("./router.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/", routing);

app.listen(8000);
