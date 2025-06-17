import mongoose from "mongoose";

const executionJobSchema = new mongoose.Schema({
    language : {
        type : String,
        enum: ['javascript', 'python', 'cpp', 'java'],
        required: true
    },
    code:{
        type : String,
        required: true,
    },
    input:{
        type : String,
        default : "",
    },
    output:{
        type : String,
    },
    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},{timestamps :  true})

export const ExecutionJob = mongoose.model('ExecutionJob',executionJobSchema);