import express, { Application } from "express";
import dotenv  from "dotenv"

import morgan from "morgan";
import mongoose from "mongoose"

import Router from "./router";

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
dotenv.config()

app.use(Router);

const startApp = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
        });
    } catch (e) {
        console.log(e)
    }
}

startApp()
