const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();

app.use(express.json({ extended: false }));

/*
app.get("/", (req, res) => {
  res.send("api is running");
});
*/

// Routes
// register new user
app.use("/api/register", require("./routes/register"));
// login user
app.use("/api/login", require("./routes/login"));
// posts
app.use("/api/posts", require("./routes/posts"));
// profiles
app.use("/api/profile", require("./routes/profile"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
