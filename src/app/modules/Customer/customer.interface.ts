export interface ICreateCustomer {
    name: string;
    email: string;
    phone: string
}

export interface IUpdateCustomer {
    name?: string;
    phone?: string
}