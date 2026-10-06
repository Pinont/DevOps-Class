import { existsSync } from 'fs';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './UserRoutes';
import cors from 'cors';

if (existsSync('.env')) {
    process.loadEnvFile('.env');
}

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;

if (!mongoUsername || !mongoPassword) {
    throw new Error('MONGO_USERNAME and MONGO_PASSWORD must be set');
}

const mongoUri = `mongodb+srv://${encodeURIComponent(mongoUsername)}:${encodeURIComponent(mongoPassword)}@cluster0.pstr1gz.mongodb.net/?appName=Cluster0`;

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use("/api/users", userRouter);

mongoose.connect(mongoUri)
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