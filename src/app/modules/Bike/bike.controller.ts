import catchAsync from "../../shared/catchAsync";
import manageResponse from "../../shared/manageResponse";
import { bike_service } from "./bike.service";

const create_bike = catchAsync(async (req, res) => {
    const result = await bike_service.create_bike_into_db(req.body);
    manageResponse(res, {
        statusCode: 201,
        success: true,
        message: "Bike added successfully",
        data: result
    })
})
const get_all_bikes = catchAsync(async (req, res) => {
    const result = await bike_service.get_all_bikes_from_db();
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Bikes fetched successfully",
        data: result
    })
})
const get_specific_bike = catchAsync(async (req, res) => {
    const { bikeId } = req.params;
    const result = await bike_service.get_specific_bike_from_db(bikeId);
    manageResponse(res, {
        statusCode: 200,
        success: true,
        message: "Bike fetched successfully",
        data: result
    })
})


export const bike_controller = {
    create_bike,
    get_all_bikes,
    get_specific_bike
}