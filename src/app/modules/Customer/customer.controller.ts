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
        statusCode: 200,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
})
const get_specific_customer = catchAsync(async (req, res) => {
    const { customerId } = req.params;
    const result = await customer_services.get_specific_customer_from_db(customerId)
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
})
const update_customer_info = catchAsync(async (req, res) => {
    const { customerId } = req.params;
    const result = await customer_services.update_customer_info_into_db(customerId, req.body)
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Customer updated successfully",
        data: result
    })
})
const delete_customer = catchAsync(async (req, res) => {
    const { customerId } = req.params;
    await customer_services.delete_customer_from_db(customerId)
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Customer deleted successfully",
    })
})

export const customer_controller = {
    create_customer,
    get_all_customer,
    get_specific_customer,
    update_customer_info,
    delete_customer
}