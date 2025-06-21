import * as mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL as string)
        console.log("Connected to DB")
    } catch (err) {
        console.error("Error connecting to DB", err)
        process.exit(1)
    }
}