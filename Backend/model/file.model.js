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
        default:'javascript'
    }
},{timestamps: true})

export const File = mongoose.model('File',fileSchema);