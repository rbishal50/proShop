import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/config.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDb();
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API IS RUNNING...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`App running on port ${port}`));
