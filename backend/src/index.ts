import app from "./app.js";

app.get("/", (req, res) => {
  res.json({ 
    status: "online",
    message: "Techofy Cloud API is running!",
    timestamp: new Date().toISOString()
  });
});

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}

export default app;
