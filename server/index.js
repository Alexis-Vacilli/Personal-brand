import express from "express";
import fileupload from 'express-fileupload';
import connectoToMongo from "./config/mongoose";
import motherRoute from "./routes/api/v1/article";
import bodyParser from "body-parser";
//import 'idempotent-babel-polyfill';

const app = express();
connectoToMongo();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload({ useTempFiles: true }));
app.use("/alex", motherRoute);

app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        msg: "Route not found"
    });
});



app.listen(4000, () => {
    console.log(`The server has started on 4000 port!`);
});

export default app;