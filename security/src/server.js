const app = require("./app");
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Security service is up on port:  ${port}`));
