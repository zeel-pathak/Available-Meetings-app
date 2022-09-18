import mongoose from "mongoose";

const eventBookedSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        default: "No Remarks"
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

export default mongoose.model('eventBooked', eventBookedSchema);