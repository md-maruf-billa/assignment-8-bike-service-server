import catchAsync from "../../shared/catchAsync";
import manageResponse from "../../shared/manageResponse";
import { service_services } from "./service.service";

const create_service = catchAsync(async (req, res) => {
    const result = await service_services.create_service_into_bd(req.body);
    manageResponse(res, {
        statusCode: 201,
        success: true,
        message: "Service record created successfully",
        data: result
    })
})
const get_all_services = catchAsync(async (req, res) => {
    const result = await service_services.get_all_service_from_db();
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Service records fetched successfully",
        data: result
    })
})
const get_specific_services = catchAsync(async (req, res) => {
    const { serviceId } = req.params;
    const result = await service_services.get_specific_service_from_db(serviceId);
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Service record fetched successfully",
        data: result
    })
})
const update_services = catchAsync(async (req, res) => {
    const { serviceId } = req.params;
    console.log(req.body)
    const result = await service_services.update_service_into_db(serviceId, req.body);
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Service marked as completed",
        data: result
    })
})
const get_over_due_service = catchAsync(async (req, res) => {
    const result = await service_services.get_over_due_service_from_db();
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result
    })
})


export const service_controller = {
    create_service,
    get_all_services,
    get_specific_services,
    update_services,
    get_over_due_service
}