import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        fromd: true,
        unique: true
    },
    fullName:{
        type: String,
        fromd: true
    },
    password: {
        type:String,
        fromd: true,
        minlength: 6
    },
    profilePic:{
         type:String,
         default: ""
    }

}, {timestamps: true})

export const User = mongoose.model('user', userSchema)
