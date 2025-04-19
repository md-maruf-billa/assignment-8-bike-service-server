import prisma from "../../utils/prismaInstance"
import { subDays } from "date-fns";


const create_service_into_bd = async (payload: any) => {
    const result = await prisma.service.create({ data: payload });
    return result;
}

const get_all_service_from_db = async () => {
    const result = await prisma.service.findMany();
    return result;
}
const get_specific_service_from_db = async (serviceId: string) => {
    const result = await prisma.service.findFirst({
        where: {
            serviceId
        }
    });
    if (!result) {
        throw new Error("Service not found !!")
    }
    return result;
}
const update_service_into_db = async (serviceId: string, payload: any) => {
    const date = new Date().toISOString()
    const isServiceExist = await prisma.service.findFirst({
        where: {
            serviceId
        }
    });
    if (!isServiceExist) {
        throw new Error("Service not found !!")
    }
    const result = await prisma.service.update({
        where: {
            serviceId
        },
        data: {
            completionDate: payload?.completionDate || date,
            status: "done"
        }
    })
    return result;
}

// get overdue services
const get_over_due_service_from_db = async () => {
    const sevenDaysAgo = subDays(new Date(), 7);
    const result = await prisma.service.findMany({
        where: {
            status: { in: ["pending", "in_progress"] },
            serviceDate: { lt: sevenDaysAgo }

        }
    })

    return result;
}

export const service_services = {
    create_service_into_bd,
    get_all_service_from_db,
    get_specific_service_from_db,
    update_service_into_db,
    get_over_due_service_from_db
}