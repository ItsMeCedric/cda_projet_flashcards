import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
