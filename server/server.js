import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import db from "./db/index.js";

const app = express();

dotenv.config();

app.use(express.json());

// ROUTES
// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("SELECT * FROM restaurants");
  console.log(results);
  res.status(200).json({});
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(colors.green.inverse(`Listening on port ${PORT}`));
});

// Create a restaurant
app.post("/api/v1/restaurants/", (req, res) => {
  console.log(req.body);
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "Success",
  });
});
