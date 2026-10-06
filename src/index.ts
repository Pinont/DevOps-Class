import express, { Request, Response } from 'express';

import mongoose from "mongoose";
import userRouter from "./UserRoutes";
import cors from "cors"

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

mongoose.connect("mongodb+srv://pinozenthailand_db_user:MVfj75qevmQf7RpN@cluster0.pstr1gz.mongodb.net/?appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as mongoose.ConnectOptions)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;