import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required: function(){
            return !this.googleId
        }
    },
    avatar : {
        type : String,
        default : ""
    },
    googleId : {
        type: String
    },
     
},{
    timestamps : true,  // Automatically adds createdAt and updatedAt fields
})

userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10); //generate the hash password before saving
        next();
    } catch (error) {
        next(error);
    }
})

userSchema.methods.matchPassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword,this.password);  // compare the passwords
}

export const User = mongoose.model('User',userSchema);