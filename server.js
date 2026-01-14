const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

/**
 * CORS CONFIGURATION
 * Allow only IIBSE frontend domains
 */
app.use(
  cors({
    origin: [
      "https://www.iibse.in",
      "https://iibse.in"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("IIBSE Backend Running");
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`IIBSE Backend running on port ${PORT}`);
});
