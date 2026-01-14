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
