const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// app.use(express.static("assets"), (req) => {
//   console.log(`server pushed ${req.url}`);
// });

app.get("/*", (req, res) => {
  const fileName =
    req.url === "/"
      ? "index.html"
      : req.url.split("/")[req.url.split("/").length - 1];
  try {
    const file = fs.readFileSync(
      path.join(__dirname, `./assets/${fileName}`)
    );
    console.log(`server push ${req.url}`)
    res.end(file);
  }catch{
      console.log(`server can't push ${req.url}, because file does not exit`)
      res.status(404)
  }
});

app.listen(3000, () => console.log("express server is listening on port 3000"));
