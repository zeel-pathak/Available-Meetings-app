import express from 'express';
const router  = express.Router();
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import userRegistrationSchema from '../model/userRegistrationSchema.js'
import freeSlotSchema from '../model/freeSlotSchema.js'
router.post('/auth/regi', async(req,res) => {

    try{
        const oldPass = req.body.password;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(oldPass, salt);
        await userRegistrationSchema.create(req.body)
        await freeSlotSchema.create({userName: req.body.userName, email: req.body.email}); 
        console.log("Registration done")
        res.status(200).send("Registration Succesfull");
    } catch (err){
        console.log(err)  
        res.status(500).send("Error registering");
    }
})

router.post('/auth/login', async (req,res) => {
    if(req.body.isEmail){
        try {
            console.log("here")
            const user = await userRegistrationSchema.findOne({ email: req.body.email });
            if (user) {
                // const tokenid = await userRegistrationSchema.findOn({ email: req.body.email });

                // check user password with hashed password stored in the database
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                if (validPassword) {
                    let token;
                    try {
                        //Creating jwt token
                        token = jwt.sign(
                        { userName: user.userName, email: user.email },
                        "secretkeyappearshere",
                        { expiresIn: "10h" }
                        );
                        const freeSlot = await freeSlotSchema.findOne({ email: req.body.email });
                        res.status(200).json({ token, fullName: user.firstName + " " + user.lastName , freeslot: freeSlot.freeSlot});
                    } catch (err) {
                console.log(err);
                const error = new Error("Error! Something went wrong.");
                return next(error);
                }
                } else {
                  res.status(400).json({ error: "Invalid Password" });
                }
              } else {
                res.status(401).json({ error: "User does not exist" });
              }
        } catch (error) {
            console.log(error.message);
            res.status(500);
        }
    }
    else{
        try {
            const user = await userRegistrationSchema.findOne({ userName: req.body.userName });
            if (user) {
                // check user password with hashed password stored in the database
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                if (validPassword) {
                    let token;
                    try {
                        //Creating jwt token
                        token = jwt.sign(
                        { userName: user.userName, email: user.email },
                        "secretkeyappearshere",
                        { expiresIn: "10h" }
                        );
                        let freeSlot = await freeSlotSchema.findOne({ userName: user.userName });
                        console.log(freeSlot)
                        if(freeSlot === null){
                            freeSlot = [];
                        }
                        res.status(200).json({ token, fullName: user.firstName + " " + user.lastName , freeSlot});
                    } catch (err) {
                console.log(err);
                const error = new Error("Error! Something went wrong.");
                return next(error);
                }
                } else {
                  res.status(400).json({ error: "Invalid Password" });
                }
              } else {
                res.status(401).json({ error: "User does not exist" });
              }
        } catch (error) {
            console.log(error.message);
            res.status(500);
        }
}
});
    

export const tokenAuthorization = (req,res,next) => {
        const token = req.headers.authorization.split(' ')[1]; 
        //Authorization: 'Bearer TOKEN'
        if(!token)
        {
            res.status(400).json({success:false, message: "JWT Token was not found"});
        }
        
        const decodedToken = jwt.verify(token,"secretkeyappearshere" );
        req.decodedToken = {
            userName:decodedToken.userName,
            email:decodedToken.email
        }

        next();
};


export default router;