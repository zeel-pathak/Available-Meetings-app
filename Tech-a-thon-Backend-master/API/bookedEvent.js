import express from 'express';
const router  = express.Router();
import { tokenAuthorization } from './login&Registration.js';
import mongoose from 'mongoose';
import userRegistrationSchema from '../model/userRegistrationSchema.js';
import freeSlotSchema from '../model/freeSlotSchema.js'
import eventBookedSchema from '../model/eventBookedSchema.js';

router.post('/', async (req,res) => { 
    
    try {
        await eventBookedSchema.create(req.body);
        res.status(200).send("Booked Event Successfully")
    } catch (err) {
        res.status(500).send(err.message);    
    }

})

router.post('/admin', tokenAuthorization, async (req,res) => {
    try {
        const moreInfo = await eventBookedSchema.find( { userName: req.decodedToken.userName});
        res.status(200).send(moreInfo)
    } catch (error) {
        res.status(500).send(error.message);
    }
})
router.get('/:id', async (req,res) => {
    try {
        const admin_details = await eventBookedSchema.find({$and: [
            { "userName": req.params.id},
            { "Date": Date.now()} ]   })
       
        res.status(200).send(admin_details)
    } catch (err) {
        res.status(500).send(err.message);
    }
})

export default router;