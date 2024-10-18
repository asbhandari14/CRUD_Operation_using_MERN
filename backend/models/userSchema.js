import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength: [2, "Name must contain at least 2 characters."],
        maxLength: [30, "Name cannot exceed 30 characters."],
        
    },
    email : {
        type : String,
        required : true,
        validate: [validator.isEmail, "Please provide valid email."],
    },
    age : {
        type : Number,
        required : true
    }
});

const User = mongoose.model("User", userSchema);

export default User;

