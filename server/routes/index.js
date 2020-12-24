import article from './api/v1/article';
import {Router} from 'express';
const router = Router();

router.route("/").get(article);
// router.route("/").get(article);
router.use('/', article)
export default router;