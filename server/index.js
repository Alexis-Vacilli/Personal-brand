import express from "express";
import connectoToMongo from "./config/mongoose";
import motherRoute from "./routes/api/v1/message";
import bodyParser from "body-parser";
import "@babel/polyfill";
const app = express();
connectoToMongo();


app.use(bodyParser.json());
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