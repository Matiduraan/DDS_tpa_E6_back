import express from "express";
import { getAllIncidents } from "../controllers/incidentController.js";

const incidents = express.Router();

incidents.get("/", async (req, res, next) => {
  try {
    const incidents = await getAllIncidents();
    res.send(incidents);
  } catch (error) {
    console.log(error);
    res.send({ message: "Ocurrio un error" });
  }
});

incidents.get("/test", async (req, res, next) => {
  res.send("Hello from incidents");
});

export default incidents;
