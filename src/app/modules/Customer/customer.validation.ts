import { z } from "zod";

const createCustomer = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string()
})

export const customerSchema = {
    createCustomer
}