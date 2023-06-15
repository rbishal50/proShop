import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/config.js";
import products from "./data/products.js";

const port = process.env.PORT || 5000;

connectDb();
const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`App running on port ${port}`));
