// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://Localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home 2");
const handleProfile = (req, res) => res.send("Profile");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
