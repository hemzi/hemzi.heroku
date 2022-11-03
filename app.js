const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ data: "Johnny 5 is alive!" });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express listening on ${port}`);
  }
});
