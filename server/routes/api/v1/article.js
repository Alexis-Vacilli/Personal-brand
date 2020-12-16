import express from 'express';
const router = express.Router();

router.use("/article", (req, res)=>{
    res.status(200).json({ success: true , msg: "Hey Vacilli" })
})

export default router;