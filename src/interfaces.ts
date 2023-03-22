interface IWorkOrderRequest {
    description: string
    mechanical: string
    client: string
    price: number
  }
  
  interface IWorkOrder extends IWorkOrderRequest {
    startDate: Date
    endDate: Date
    id: string
  }

  type WorkOrderRequiredKeyes = "description" | "mechanical" | "client" | "price"

  export {IWorkOrder, IWorkOrderRequest, WorkOrderRequiredKeyes }