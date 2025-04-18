import { Router } from "express";
import customerRouter from "./app/modules/Customer/customer.route";
import bikeRouter from "./app/modules/Bike/bike.route";

const appRouter = Router()

const routes = [
    { path: "/customers", route: customerRouter },
    { path: "/bikes", route: bikeRouter }
]
routes.forEach(route => appRouter.use(route.path, route.route))


export default appRouter;