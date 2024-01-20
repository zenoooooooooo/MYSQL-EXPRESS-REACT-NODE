// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

const studentsRoutes = require("./routes/students");
app.use("/students", studentsRoutes);

app.listen(port, () => {
  console.log("App is listening on port:", port);
});
