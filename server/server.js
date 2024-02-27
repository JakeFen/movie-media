require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");
const reviewRoutes = require("./routes/review-routes");
const followerRoutes = require("./routes/follower-routes");

// Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api", followerRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
