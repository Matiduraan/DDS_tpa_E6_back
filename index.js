import express from "express";
import incidents from "./routes/incidentRoutes.js";
import { getAllIncidents } from "./controllers/incidentController.js";
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/", async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Hurray!! we create our first server on bun js",
      success: true,
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

app.use("/incidents", incidents);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
