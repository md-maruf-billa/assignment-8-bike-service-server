import { response, Response } from "express";
import { IResponse } from "../types";


const manageResponse = async (res: Response, resPayload: IResponse) => {
    res
        .status(resPayload.statusCode)
        .json({
            success: resPayload.success,
            message: resPayload.message,
            data: resPayload?.data,
            meta: resPayload?.meta
        })
}

export default manageResponse;