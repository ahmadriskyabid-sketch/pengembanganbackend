const express = require("express");
const app = express();
const port = 5000;

//get post put delete

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profil", (req, res) => {
  res.send("ini halaman profil");
});
app.listen(port, () => {
  console.log(`aplikasi berjalan di http://localhost:${port}`);
});
