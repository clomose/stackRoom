import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    content:{
        type : String,
        default: '',
    },
    poject:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    language:{
        type:String,
        enum : ['javascript', 'python', 'java', 'cpp', 'html', 'css'],
        default:'javascript'
    }
},{timestamps: true})

export const File = mongoose.model('File',fileSchema);