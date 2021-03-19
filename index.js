import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();
app.use("/", express.static(__dirname + "/dist"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(5000, () => {
  console.log("serve on http://localhost:5000");
});