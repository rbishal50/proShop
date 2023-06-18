import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/config.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDb();
const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`App running on port ${port}`));
