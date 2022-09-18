import mongoose from "mongoose";

const freeSlotSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    freeSlot: {
        type: Array,
        default: []
    }

});

export default mongoose.model('availableSlot', freeSlotSchema);