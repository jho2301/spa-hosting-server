import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config(); // 헤로쿠 올릴 땐 제거

const app = express();

app.use("/", express.static(path.resolve("dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`serve on http://localhost:${process.env.PORT}`);
});
