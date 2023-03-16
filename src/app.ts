import express, { Application, json, Request, Response } from "express";
import { v4 as uuidv4} from 'uuid';

const app: Application = express();
app.use(json());

interface IWorkOrderRequest {
  description: string
  mechanical: string
  client: string
  price: number
}

interface IWorkOrder extends IWorkOrderRequest {
  start_date: Date
  end_date: Date
  id: string
}

const orders: Array<IWorkOrder> = [];
 
app.post("/work-order", (request: Request, response: Response): Response => {
  
  const orderDate: IWorkOrderRequest = request.body
  

  const newOrderData: IWorkOrder ={
    id: uuidv4(),
    start_date: new Date(),
    end_date: new Date(Date.now() + 86400 * 1000),
    ...orderDate
  }

  orders.push(newOrderData)

  console.log(newOrderData)

  return response.status(201).json(newOrderData);
});

app.get("/work-order", (request: Request, response: Response): Response => {
  return response.status(200).json(orders);
});

const PORT: number = 3000;

const runnngiMsg: string = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log(runnngiMsg));
