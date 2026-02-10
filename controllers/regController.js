const userModel = require("../models/User");
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");


const userRegister =(req,res)=>{
    const {name,email,password} =req.body;
    const saveReg= new userModel({
        name,
        email,
        password
    })
    saveReg.save().then(()=>{
        res.send({status:1, message:"Registeration Completed"});
    }).catch((err)=>{
  console.log("REGISTER ERROR ", err);
  res.send({ status: 0, message: err.message });
});

}

const showprofile = async (req, res) => {
  try {
    res.status(200).json({
      status: 1,
      profile: req.user
    });
  } catch (err) {
    res.status(401).json({
      status: 0,
      message: "Unauthorized"
    });
  }
};


const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

  const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,  
      { expiresIn: "1d" }
    );


    res.status(200).json({
      message: "Login successfully",
      token
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { userRegister, logIn,showprofile };
