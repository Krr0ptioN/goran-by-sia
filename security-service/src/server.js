const app = require("./app");
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.clear();
  console.log("## Security Service");
  console.log(`http://localhost:${port}`);
});
