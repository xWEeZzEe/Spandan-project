import app from "./app.js";

const port = process.env.PORT || 3000;

// ✅ Ping route for deployment check
app.get("/", (req, res) => {
  res.status(200).send("✅ Backend Deployment Successful");
});

// Start server at port
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
