import User from "../models/user.model.js";
import  bcryptjs from "bcryptjs";
import  errorHandler from "../utils/error.js"
import jwt from "jsonwebtoken";



 const signup = async (req, res , next) => {
  const {username , email, password} = req.body;
  if(!username || !email || !password || username ==='' || email ==='' || password ===''){

  next(errorHandler(400,'All fields are required'));
  }

  const hashedPassword =  bcryptjs.hashSync(password, 10);

  try{
    const newUser = new User({
      username , 
      email ,
       password:hashedPassword});
    await  newUser.save();
    res.json({message: "User created successfully"});
  }catch (error){
   next(error);

};
};

export default signup;



export const signin = async (req, res) => {
  // res.send("Sigin");

  const {email , password} = req.body;
  if(!email || !password || email ==='' || password ===''){
    next(errorHandler(400,'All fields are required'));
  }
  try{
    validUser = await User.findOne({email});

    if(!validUser){
      next(errorHandler(400,'Invalid email or password'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      next(errorHandler(400,'Invalid email or password'));
    }
    const token = jwt.sign(
      {id: vaildUser._id} , process.env.JWT_SECRET);
      res.status(200).cookie('access_token',token,{
        httpOnly: true,
      }).json(validUser);

    

  }catch(error){
    next(error)
  }


};