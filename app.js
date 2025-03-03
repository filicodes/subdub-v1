import express from "express";

import { PORT } from "./config/env.js";

console.log("asdadad", PORT);

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the subdub API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
