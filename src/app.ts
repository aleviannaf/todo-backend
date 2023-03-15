import express, {
  Application,
  json,
  request,
  Request,
  Response,
} from "express";

const app: Application = express();
app.use(json());

app.post("/", (resquest: Request, response: Response): Response => {
  return response.status(201).json(resquest.body);
});

app.get("/", (request: Request, response: Response): Response => {
  return response.status(200).json({ status: "0k" });
});


const PORT: number = 3000;

const runnngiMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, ()=> console.log(runnngiMsg))