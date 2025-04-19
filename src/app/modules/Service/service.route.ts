import { Router } from "express";
import { service_controller } from "./service.controller";
import requestValidator from "../../middlewares/requestValidator";
import { service_validation } from "./service.validation";
const serviceRouter = Router();

serviceRouter.get("/status", service_controller.get_over_due_service)
serviceRouter.post("/", requestValidator(service_validation.create_service), service_controller.create_service)
serviceRouter.get("/", service_controller.get_all_services);
serviceRouter.get("/:serviceId", service_controller.get_specific_services);
serviceRouter.put("/:serviceId", requestValidator(service_validation.update_service), service_controller.update_services);


export default serviceRouter;