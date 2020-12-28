import article from './api/v1/message';
import {Router} from 'express';
const router = Router();
router.route("/").get(article);

export default router;