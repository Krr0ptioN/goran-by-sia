import express from "express";

const app = express();
app.use("/media", express.static("bucket"));

app.listen(4400, () => {
  console.clear();
  console.log("## File Service");
  console.log("http://localhost:4400");
});
