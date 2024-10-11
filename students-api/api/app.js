const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3500;
// MongoDB connection string
const mongoURI = "mongodb://localhost:4500/studentsdb";

const userRoutes = require("./routes/user");

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

// Middleware to parse JSON
app.use("/user", userRoutes);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express with MongoDB!");
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
