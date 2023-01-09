const express = require("express");
const sendMail = require("./sendmail");

const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, message: "server is working" });
});

app.get("/mail", sendMail);

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
