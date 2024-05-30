const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});
mongoose.model("User", UserSchema);
module.exports = mongoose.model("User");
