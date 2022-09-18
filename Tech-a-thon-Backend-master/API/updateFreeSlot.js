import express from 'express';
const router  = express.Router();
import { tokenAuthorization } from './login&Registration.js';
import mongoose from 'mongoose';
import freeSlotSchema from '../model/freeSlotSchema.js'

router.post('/', tokenAuthorization, async (req,res) => { 
    
    try {
        await freeSlotSchema.findOneAndUpdate({userName: req.decodedToken.userName}, {freeSlot: req.body.freeSlot});
        res.status(200).send("Update free slot succesfully")
    } catch (err) {
        res.status(500).send(err.message);    
    }

})

export default router;