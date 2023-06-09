import { Request, Response } from "express";
import {
  IWorkOrder,
  IWorkOrderRequest,
  WorkOrderRequiredKeyes,
} from "./interfaces";
import { v4 as uuidv4 } from "uuid";
import { orders } from "./database";

const validateDateOrder = (payload: any): IWorkOrderRequest => {
  const keys: Array<string> = Object.keys(payload);
  const requiredKeys: Array<WorkOrderRequiredKeyes> = [
    "description",
    "mechanical",
    "client",
    "price",
  ];

  const containsRequired: boolean = requiredKeys.every((key: string) => {
    return keys.includes(key);
  });

  if (!containsRequired) {
    throw new Error(`Required keys are: ${requiredKeys}`);
  }

  return payload;
};

const createWorkOrder = (request: Request, response: Response): Response => {
  try {
    const orderDate: IWorkOrderRequest = validateDateOrder(request.body);

    const newOrderData: IWorkOrder = {
      id: uuidv4(),
      startDate: new Date(),
      endDate: new Date(Date.now() + 86400 * 1000),
      ...orderDate,
    };

    orders.push(newOrderData);

    console.log(newOrderData);

    return response.status(201).json(newOrderData);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      message: "Internal server error",
    });
  }
};

const listWorkOrder = (request: Request, response: Response): Response => {
  return response.status(200).json(orders);
};

const retrieveWorkOrder = (request: Request, response: Response): Response => {
  const indexWorkOrder: number = request.workOrder.indexWorkOrder;

  return response.status(200).json(orders[indexWorkOrder]);
};

const deleteWorkOrder = (request: Request, response: Response): Response => {
  const indexWorkOrder: number = request.workOrder.indexWorkOrder;

  orders.splice(indexWorkOrder, 1);

  //para deleção o status é 204, quando usado esse status
  //é usado a função send sem parameto, pq por si só já mostra que foi deletado com sucesso
  return response.status(204).send();
};

const updateWorkOrder = (request: Request, response: Response): Response=>{
  
  const indexWorkOrder: number = request.workOrder.indexWorkOrder;

  orders[indexWorkOrder]= {...orders[indexWorkOrder], ...request.body}

  return response.json(orders[indexWorkOrder])
}

export { createWorkOrder, listWorkOrder, retrieveWorkOrder, deleteWorkOrder, updateWorkOrder };
