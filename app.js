const { application } = require("express");
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ data: "Johnny 5 is alive!" });
});

app.get("/password", (req, res) => {
  res.status(200).send({ data: genPassword() });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express listening on ${port}`);
  }
});

function genPassword() {
  const chars =
    "abcdefghijkmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
  let pass = "";
  for (i = 0; i < 20; i++) {
    pass += chars[Math.floor(chars.length * Math.random())];
  }
  return pass;
}
