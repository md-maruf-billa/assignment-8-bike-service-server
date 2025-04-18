import { Router } from "express";
import customerRouter from "./app/modules/Customer/customer.route";

const appRouter = Router()

const routes = [
    { path: "/customers", route: customerRouter }
]
routes.forEach(route => appRouter.use(route.path, route.route))


export default appRouter;