import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, "an experience must have a title"],
        unique : [true, "An experience title must be unique, please a different title"]
    },
    skillLevel: {
        type: String,
        required : [true, "an experience must have a skill level"]
    }
})

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;