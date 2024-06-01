const express = require("express");
const app = express();
const db = require("./db");

const userApi = require("./user-api");
app.use("/api/users", userApi);

const authApi = require("./auth-api");
app.use("/api/auth", authApi);

app.get("/api/health", function (req, res) {
  res.status(200).send({ status: "ok" });
});

module.exports = app;
