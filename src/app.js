import express from "express";
import mocksRouter from "./routes/mocks.router.js";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionRouter from "./routes/adoption.router.js";
import { swaggerUi, swaggerSpecs } from "./config/swagger.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(" Proyecto Final Backend 3 ");
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/api/mocks", mocksRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionRouter);

export default app;
