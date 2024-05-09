const mongoose = require("mongoose");
const {
  DATABASE: host,
  DATABASE_USER: user,
  DATABASE_PASS: pass,
} = require("./config");

mongoose.connect(`mongodb://${host}/security`, {
  user,
  pass,
});
