import mongoose from "mongoose";

const userRegistrationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true
    }

});

export default mongoose.model('users', userRegistrationSchema)