import { Router } from "express";
import { customer_controller } from "./customer.controller";
import requestValidator from "../../middlewares/requestValidator";
import { customerSchema } from "./customer.validation";

const customerRouter = Router();


customerRouter.post("/", requestValidator(customerSchema.createCustomer), customer_controller.create_customer)
customerRouter.get("/", customer_controller.get_all_customer)


export default customerRouter;