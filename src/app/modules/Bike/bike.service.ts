import prisma from "../../utils/prismaInstance";
import { ICreateBike } from "./bike.interface";

const create_bike_into_db = async (payload: ICreateBike) => {
    const result = await prisma.bike.create({ data: payload });
    return result;
}

const get_all_bikes_from_db = async () => {
    const result = await prisma.bike.findMany();
    return result;
}
const get_specific_bike_from_db = async (bikeId: string) => {
    const result = await prisma.bike.findFirst({ where: { bikeId } });
    if (!result) {
        throw new Error("Bike not found !!")
    }
    return result;
}

export const bike_service = {
    create_bike_into_db,
    get_all_bikes_from_db,
    get_specific_bike_from_db
}