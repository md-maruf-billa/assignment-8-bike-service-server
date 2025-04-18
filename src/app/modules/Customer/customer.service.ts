import prisma from "../../utils/prismaInstance"
import { ICreateCustomer, IUpdateCustomer } from "./customer.interface"

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
const get_specific_customer_from_db = async (customerId: string) => {
    const result = await prisma.customer.findFirst({
        where: {
            customerId
        }
    });
    if (!result) {
        throw new Error("Customer not found !!")
    }
    return result;
}

const update_customer_info_into_db = async (customerId: string, payload: IUpdateCustomer) => {
    const isExistCustomer = await prisma.customer.findFirst({ where: { customerId } })
    if (!isExistCustomer) {
        throw new Error("Customer not found for update!!")
    }
    const result = await prisma.customer.update({
        where: {
            customerId
        },
        data: payload
    })
    return result
}

const delete_customer_from_db = async (customerId: string) => {
    const isExistCustomer = await prisma.customer.findFirst({
        where: {
            customerId
        }
    })
    if (!isExistCustomer) {
        throw new Error("Customer not found for delete !!")
    }
    await prisma.customer.delete({ where: { customerId } })
    return null
}

export const customer_services = {
    create_customer_into_db,
    get_all_customer_from_db,
    get_specific_customer_from_db,
    update_customer_info_into_db,
    delete_customer_from_db
}