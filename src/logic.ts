import { Request, Response } from "express";
import { IWorkOrder, IWorkOrderRequest, WorkOrderRequiredKeyes  } from "./interfaces"
import { v4 as uuidv4} from 'uuid';
import { orders } from "./database";

const createWorkOrder = (request: Request, response: Response): Response => {
  
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
  }

const listWorkOrder = (request: Request, response: Response): Response => {
    return response.status(200).json(orders);
  }

  export { createWorkOrder, listWorkOrder }