//students.js
const express = require("express");
const router = express.Router();
const db = require("../database");

const errorMessage = "Internal Server Error";

router.post("/new", async (req, res) => {
  try {
    const { student_id, first_name, last_name, age } = req.body;

    if (!student_id || !first_name || !last_name || !age) {
      return res.status(400).json({
        message: "Missing required fields",
      }); 
    }

    const query =
      "INSERT INTO students (student_id, first_name, last_name, age) VALUES (?, ?, ?, ?);";
    const [rows, fields] = await db.query(query, [
      student_id,
      first_name,
      last_name,
      age,
    ]);
    
    res.status(200).json({
      message: "Student added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: errorMessage,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM students";
    const [rows, fields] = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: errorMessage,
    });
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const query = "SELECT * FROM students WHERE student_id = ?";
      const [rows, fields] = await db.query(query, [id]);
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: errorMessage,
      });
    }
  })
  .put(validation, async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, age } = req.body;

      const query =
        "UPDATE students SET first_name = ?, last_name = ?, age = ? WHERE student_id = ?";
      const [rows, fields] = await db.query(query, [
        first_name,
        last_name,
        age,
        id,
      ]);

      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: errorMessage,
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const query = "DELETE FROM students WHERE student_id = ?";
      const [rows, fields] = await db.query(query, [id]);
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: errorMessage,
      });
    }
  });

function validation(req, res, next) {
  const { first_name, last_name, age } = req.body;

  if (!first_name || !last_name || !age) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  next();
}

module.exports = router;
