import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    citizenId: {
      type: String, // Assuming you'll store the photo URL/path as a string
    },
    location: {
      type: String, // String ma store
    },
    role: {
      type: String,
      enum: ["user","admin"],
      default:"user",
    },
    isVerifiedPost:{
      type:Boolean,
      default:false,
    },
    dateOfBirth:{
      type:Date,
      required:false,
    },
    phoneNo:{
      type:String,
      required:false,
    }, // Added closing curly brace here

    emergencyContact:{
      type:String,
      required:false,
    },
    gender:{
      type:String,
      required:false,
      
    },

    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },

    
  },

  {
    timestamps: true,
  }
);
const User = mongoose.model("User",userSchema);
export default User;