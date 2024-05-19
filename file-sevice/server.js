import express from "express";

const app = express();
app.use("/media", express.static("bucket"));

app.listen(4400);
