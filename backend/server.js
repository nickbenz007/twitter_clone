import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import colors from "colors";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running on port: ${port} successfully`)
);
