import mongoose from 'mongoose';
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

export default mongoose.model('article', articleSchema);