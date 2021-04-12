import express from "express";
import path from "path";

const app = express();

app.use("/", express.static(path.resolve("dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`serve on http://localhost:${process.env.PORT}`);
});
