import Articles  from '../models/article'
import uploader from "../config/cloudinary";



class Article {
    static async createArticle(req, res, next) {
        try {
            const article = await Articles.create({
                ...req.body,
                imageUrl: "",
                imageId: "",
            }) 
    
            if (req.files) {
                const tmp = req.files.image.tempFilePath;
                const result = await uploader.upload(tmp, (_, result) => result);
                article.imageUrl = result.url;
                article.imageId = result.public_id;
                article.save();
          
                return res.status(201).json({ success: true, data: article });
            }
        } catch (error) {
            return res.status(400).json({
                success: false, msg: "error"
            })
        }

    }
}

export default Article