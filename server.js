// 1. Require Express
const express = require("express");
const mongoose = require("mongoose");

// 2. Create instance of Express
const app = express();

// 3. Set server PORT
const PORT = process.env.PORT || 3001;

// 5. Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern-portfolio",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

// 6. Create Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// 4. Listen on PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
