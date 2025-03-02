import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the subdub API");
});

app.listen(3000, () => {
  console.log("server running");
});

export default app;
