const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello there Cojones");
});

app.get("/other", (req, res) => {
  res.send("Wow this works too");
});

app.listen(port, () => console.log(`Ready to rumble on port ${port}`));
