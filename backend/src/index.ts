import app from "./app.js";

app.get("/", (req, res) => {
  res.json({ 
    status: "online",
    message: "Techofy Cloud API is running!",
    timestamp: new Date().toISOString()
  });
});

// Railway PORT env var use karo - production mein bhi listen karo
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

export default app;
