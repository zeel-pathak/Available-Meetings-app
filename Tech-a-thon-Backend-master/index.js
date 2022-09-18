import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import mongoose from 'mongoose';
import auth from './API/login&Registration.js';
import freeSlot from './API/updateFreeSlot.js';
import bookedEvent from './API/bookedEvent.js'
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors());
// Database Connection
mongoose.connect(process.env.MONGO_URL,(err) => {
  if(err){
      throw err
  }
})
app.use('/', auth);
app.use('/freeslot', freeSlot);
app.use('/bookEvent', bookedEvent);



app.listen('5000', () => {
    console.log("App is running")
})