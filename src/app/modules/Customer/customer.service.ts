import prisma from "../../utils/prismaInstance"
import { ICreateCustomer } from "./customer.interface"

const create_customer_into_db = async (payload: ICreateCustomer) => {
    const result = await prisma.customer.create({
        data: payload
    })
    return result;
}


const get_all_customer_from_db = async () => {
    const result = await prisma.customer.findMany();
    return result;
}

export const customer_services = {
    create_customer_into_db,
    get_all_customer_from_db
}