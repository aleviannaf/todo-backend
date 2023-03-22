import express, { Application, json, Request, Response } from "express";
import { createWorkOrder, listWorkOrder } from "./logic";

const app: Application = express();
app.use(json());

app.post("/work-order", createWorkOrder);

app.get("/work-order", listWorkOrder);

const PORT: number = 3000;

const runnngiMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log(runnngiMsg));
