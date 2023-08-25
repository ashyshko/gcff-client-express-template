import express, { Request, Response } from "express";

const app = express()
  .get("/", (req, res) => {
    res.send("hello, " + (req.query['name'] ?? 'world'));
  })
export default app;
