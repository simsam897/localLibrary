import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRouter from "./routes/book.route.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import authRoutes from "./routes/auth.route.js";
import check from "./controllers/user.controller.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

const app = express();
// const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const __dirname = path.resolve();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library Management System",
      version: "1.0.0",
      description: "MERN stack library management API",
      contact: {
        name: "Simranjit singh",
        email: "simma013s@gmail.com",
        url: "https://github.com/simsam897",
      },
    },
    servers: [
      {
        url: `http://localhost:5000`,
      },
    ],
  },

  apis: ["./api/routes/*.js"],
};

const specification = swaggerJSDoc(options);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", check);
app.use("/api/book", bookRouter);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specification));

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
