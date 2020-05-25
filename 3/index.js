import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.get("/", (req, res) => {
  res.send("hi from home");
});

app.listen(PORT, handleListening);
