import mongoose from 'mongoose';
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },

    imageUrl: { type: String },
    imageId: { type: String },
  
});

export default mongoose.model('article', articleSchema);