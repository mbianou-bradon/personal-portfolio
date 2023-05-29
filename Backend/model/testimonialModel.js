import mongoose from "mongoose";


const testimonialSchema = new mongoose.Schema({
    userName: {
        type : String,
        required : [true, "Please add a user name"],
        unique: [true, "User name already in use, please use a different name"]
    },
    userProfile : {
        type : String, 
        required : [true, "Please add user profile"]
    },
    testimonyBody : {
        type : String,
        required: [true, "Please you can't submit an empty testimony"]
    }
},{ timestamps : true})

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;