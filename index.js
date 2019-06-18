const express = require("express");

const server = require("./server.js");

const db = require("./data/accounts-model");

const PORT = process.env.PORT || 4000;

server.get("/accounts", (req, res) => {
  db.find()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      res.status(500).json({ message: "Error retrieving accounts data." });
    });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
