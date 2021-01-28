const express = require("express");
const app = express();
const portNumber = 3000;
const sourceDir = "dist";

const cacheTime = 31536000;
app.use(express.static(sourceDir, { maxAge: cacheTime }));
app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
