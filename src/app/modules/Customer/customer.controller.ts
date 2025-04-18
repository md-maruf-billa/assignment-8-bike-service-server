import catchAsync from "../../shared/catchAsync";
import manageResponse from "../../shared/manageResponse";
import { customer_services } from "./customer.service";

const create_customer = catchAsync(async (req, res) => {
    const result = await customer_services.create_customer_into_db(req.body)
    manageResponse(res, {
        statusCode: 201,
        success: true,
        message: "Customer created successfully",
        data: result
    })
})
const get_all_customer = catchAsync(async (req, res) => {
    const result = await customer_services.get_all_customer_from_db()
    manageResponse(res, {
        statusCode: 201,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
})

export const customer_controller = {
    create_customer,
    get_all_customer
}