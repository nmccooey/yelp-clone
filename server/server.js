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
        restaurant: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// GET a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// CREATE a restaurant
app.post("/api/v1/restaurants/", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// UPDATE a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  const results = await db.query(
    "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
    [req.body.name, req.body.location, req.body.price_range, req.params.id]
  );

  res.status(200).json({
    status: "success",
    data: {
      restaurant: results.rows[0],
    },
  });
});

// DELETE a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  try {
    db.query("DELETE FROM restaurants where id = $1", [req.params.id]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(colors.green.inverse(`Listening on port ${PORT}`));
});
