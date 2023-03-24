import express, { Application, json, Request, Response } from "express";
import { createWorkOrder, deleteWorkOrder, listWorkOrder, retrieveWorkOrder } from "./logic";

const app: Application = express();
app.use(json());

app.post("/work-order", createWorkOrder);

app.get("/work-order", listWorkOrder);

app.get("/work-order/:id", retrieveWorkOrder);

app.delete("/work-order/:id", deleteWorkOrder)

const PORT: number = 3000;

const runnngiMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log(runnngiMsg));
