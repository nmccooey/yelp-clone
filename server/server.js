import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import db from "./db/index.js";

const app = express();

dotenv.config();

app.use(express.json());

// ***** ROUTES *****

// GET all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// GET a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(colors.green.inverse(`Listening on port ${PORT}`));
});

// INSERT a restaurant
app.post("/api/v1/restaurants/", (req, res) => {
  console.log(req.body);
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
});

// DELETE a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "Success",
  });
});
