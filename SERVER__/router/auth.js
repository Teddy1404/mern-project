const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
require("../db/conn");
const User = require("../models/user");

//Using async await

router.post('/register',async(req,res)=>{
    const {name, email,phone, work, password,cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "plz fill the form correctly"});
    }
    try {
       const userExist = await User.findOne({email:email});
       if(userExist){
        return res.status(422).json({error:"email already exist"});

       } 
       else if(password != cpassword){
        return res.status(422).json({error:"Password is not matching"})
       }
       else{
        const user = new User({name ,email, phone, work, password,cpassword});

        //here comes password hashing which is in userschema file
        await user.save();
        res.status(201).json({message : "user registered successfully"});
       }
       
    } catch (err) {
        console.log(err);
    }
});

//login route

router.post('/signin',async(req,res)=>{
    try {
      const {email , password} = req.body;
      if(!email || !password){
        return res.status(400).json({error:"pls fill the data"})
        
      }
        const userLogin =await User.findOne({email:email});
        console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie('jwttoken',token,{
                expires:new Date(Date.now() + 2589200000)
            });
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials"});
            }
            else{
                res.json({message:"User sign in successfully"});
            }
        }else{
            res.status(400).json({errro:"Invalid credentials"});
        }
       
    } catch (err) {
        console.log(err);
    }
});

//using promises

// router.get('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"pls fill the form properly"});
//     };
//   User.findOne({email:email})
//   .then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"Email is already exist"});
//     }

//     const user = new User({name,email,phone,work,password,cpassword});
//     user.save().then(()=>{
//         res.status(201).json({message:"user registered"});
//     }).catch((err)=>res.status(500).json({error:"failed to registered"}));
//   }).catch(err=>{console.log(err);});

// });


module.exports = router;
