import {CustomerModel} from "../models/Customer";
import express, {response} from "express";

export const createCustomer = async (req: express.Request, res: express.Response) => {
    const customer = new CustomerModel(req.body)
    await customer.save()
    response.status(201).json(customer)
}