import express from "express";

const app = express();
app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/version", (req, res) =>
  res.status(200).send(process.env.VERSION ?? "10.0.0")
);
app.get("/hello", (req, res) => res.status(200).json("my name is leedonggyu"));
app.listen(3000, () => console.log("Server is running on port 3000"));
