import { Router } from "express";
import requestValidator from "../../middlewares/requestValidator";
import { bike_validation_schema } from "./bike.validation";
import { bike_controller } from "./bike.controller";

const bikeRouter = Router();

bikeRouter.post("/", requestValidator(bike_validation_schema.createBike), bike_controller.create_bike)
bikeRouter.get("/", bike_controller.get_all_bikes)
bikeRouter.get("/:bikeId", bike_controller.get_specific_bike)

export default bikeRouter;