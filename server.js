const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: ["https://www.iibse.in", "https://iibse.in"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// routes
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("IIBSE Backend Running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`IIBSE Backend running on port ${PORT}`);
});
