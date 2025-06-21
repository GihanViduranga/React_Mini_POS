import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./db/mongo";
import rootRouter from "./routes";

dotenv.config();
const app = express();

app.use(express.json())
const PORT = process.env.PORT

app.use("/api",rootRouter)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

