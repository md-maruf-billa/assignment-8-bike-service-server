import { Router } from "express";
import { customer_controller } from "./customer.controller";
import requestValidator from "../../middlewares/requestValidator";
import { customerSchema } from "./customer.validation";

const customerRouter = Router();


customerRouter.post("/", requestValidator(customerSchema.createCustomer), customer_controller.create_customer)
customerRouter.get("/", customer_controller.get_all_customer)
customerRouter.get("/:customerId", customer_controller.get_specific_customer)
customerRouter.put("/:customerId", requestValidator(customerSchema.updateCustomer), customer_controller.update_customer_info)
customerRouter.delete("/:customerId", customer_controller.delete_customer)


export default customerRouter;