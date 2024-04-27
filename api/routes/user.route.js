import express from "express";

 const router = express.Router();

router.get("/check" , (req, res) => {

  res.json(" working sucessfully");
  
}); 

export default router;



