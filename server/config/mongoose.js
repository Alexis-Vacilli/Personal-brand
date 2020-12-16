import mongoose from 'mongoose';
require("dotenv/config");
const connectoToMongo = () => {
    mongoose.connect(process.env.db_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log(`Succesfully connected`);
    }).catch(error => {
        console.log(String(error.message));
    });
}
export default connectoToMongo;