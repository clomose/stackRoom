import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    workspace : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Workspace',
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    role : {
        type : String,
        enum : ['editor','owner','viewer'],
        required : true
    }
},{timestamps : true})


export const Member = mongoose.model('Member',memberSchema);