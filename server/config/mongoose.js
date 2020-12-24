import mongoose from 'mongoose';
import regeneratorRuntime from "regenerator-runtime";
const connectoToMongo = () => {
    mongoose.connect(process.env.db_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log(`Succesfully connected`);
    }).catch(error => {
        return error.message
    });
}
export default connectoToMongo;