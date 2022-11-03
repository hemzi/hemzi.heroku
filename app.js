const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ data: "Johnny 5 is alive!" });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
});
