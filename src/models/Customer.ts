import mongoose from "mongoose";

type Customer = {
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string
}

const customerSchema = new mongoose.Schema<Customer>({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        minlength: [2, "Name must be at least 2 characters long."],
        required: [true, "Name is required."],
        trim: true
    },
    email: {
        type: String,
        minlength: [8, "Email must be at least 8 characters long."],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email."
        ],
        required: [true, "Email is required."],
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        minlength: [10, "Phone must be at least 10 characters long."],
        required: [true, "Phone is required."],
        unique: true
    },
    address: {
        type: String,
        minlength: [5, "Address must be at least 5 characters long."],
        required: [true, "Address is required."],
        trim: true
    }
})

export const CustomerModel = mongoose.model<Customer>('Customer', customerSchema);