import express from 'express';
import Article from '../../../controllers/article';
const router = express.Router();


router.route('/article').post(Article.createArticle)

export default router;