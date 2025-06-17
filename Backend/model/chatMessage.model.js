import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

export const ChatMessage = mongoose.model('ChatMessage',chatMessageSchema);