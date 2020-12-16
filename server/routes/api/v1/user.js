import express from 'express';
import {userSignUp} from '../../../controllers/user';
const router = express.Router();
require ('dotenv').config();




router.post('/signup', userSignUp);
module.exports = router;