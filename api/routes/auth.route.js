 import express from 'express';
 import signupController, { signin } from  "../controllers/auth.controller.js";
const router = express.Router();


router.post('/signup', signupController);
router.post('/signin', signin);




export default router;


