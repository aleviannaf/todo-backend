import express, { Application, json, Request, Response } from "express";
import {
  createWorkOrder,
  deleteWorkOrder,
  listWorkOrder,
  retrieveWorkOrder,
  updateWorkOrder,
} from "./logic";
import { ensureWorkOrderExists } from "./middlewares";

const app: Application = express();
app.use(json());

app.post("/work-order", createWorkOrder);

app.get("/work-order", listWorkOrder);

app.get("/work-order/:id", ensureWorkOrderExists, retrieveWorkOrder);

app.delete("/work-order/:id", ensureWorkOrderExists, deleteWorkOrder);

app.patch("/work-order/:id", ensureWorkOrderExists, updateWorkOrder);

const PORT: number = 3000;

const runnngiMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log(runnngiMsg));
