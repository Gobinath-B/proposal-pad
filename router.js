var express = require("express");
var router = express.Router();
var fb = require("./config");
const db = fb.firestore();

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

router.post("/save", async function (req, res) {
  await db.collection("user-data").add({
    name: req.body.n,
    her_name : req.body.q,
    messsage: req.body.d,
  });
  res.redirect("/reply");
});

router.get("/reply", function (req, res) {
  res.sendFile(__dirname + "/" + "reply.html");
});

module.exports = router;
