const User = require("../models/userModel");


const userCOntroller = {
    getAllUsers: async (req,res) =>{
        try{
            const  limit=req.query.limit;
            const users= await User.find().limit(limit);
            res.json(users);
        } catch(error){
            console.error('Error fetching users:',error);
            res.status(500).json({error:'Internal Server Error'});

        }
    },

    createUser: async (req,res) =>{
        const {name, email, password,rollno} =req.body;
        const newUser = new User({name, email, password, rollno});

        try{
            const saveUser = await newUser.save();
            res.json(saveUser);
        }catch(error){
            console.error('Error creating user:',error);
            res.status(500).json({error:'Internal Server Error'});
        }
    },
};

module.exports=userCOntroller;