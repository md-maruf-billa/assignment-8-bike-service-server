import { Router } from "express";
import customerRouter from "./app/modules/Customer/customer.route";
import bikeRouter from "./app/modules/Bike/bike.route";
import serviceRouter from "./app/modules/Service/service.route";

const appRouter = Router()

const routes = [
    { path: "/customers", route: customerRouter },
    { path: "/bikes", route: bikeRouter },
    { path: "/services", route: serviceRouter },
]
routes.forEach(route => appRouter.use(route.path, route.route))


export default appRouter;