const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("api is running");
});

// Routes
// register new user
app.use("/api/register", require("./routes/register"));
// login user
app.use("/api/login", require("./routes/login"));
// posts
//app.use("/api/posts", require("./routes/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
