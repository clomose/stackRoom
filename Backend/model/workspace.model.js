import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    members:[{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required: true
        },
        role:{
            type: String,
            enum: ["owner","editor","viewer"],
            default : "editor"
        }
    }],
},{timestamps : true});

export const Workspace = mongoose.model('Workspace',workspaceSchema);