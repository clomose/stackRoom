import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    workspace : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Workspace',
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    collaborators: [
        {
            user : {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            role:{
                type: String,
                enum: ['editor', 'viewer'],
                default: 'editor',
            }
        }
    ]
},{timestamps: true})

export const Project = mongoose.model('Project',projectSchema);