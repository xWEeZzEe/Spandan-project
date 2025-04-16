import express from "express";
import cors from "cors"; // Import CORS package
import app from "./app.js";

const port = process.env.PORT || 3000;

// ✅ Ping route for deployment check
app.get("/", (req, res) => {
  res.status(200).send("✅ Backend Deployment Successful");
});

// Enable CORS for your frontend domain
app.use(cors({
  origin: "https://spandan-front.vercel.app", // Allow only your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and authorization headers
}));

// Start server at the specified port
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
