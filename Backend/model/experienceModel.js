const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, "Main Experience title required"],
        unique: [true, "Main Experience title must be unique"]
    },
    experiences : [
        {
            title : {
                type: String,
                required : [true, "an experience must have a title"],
                unique : [true, "An experience title must be unique, please a different title"]
            },
            skillLevel: {
                type: String,
                required : [true, "an experience must have a skill level"]
            }
        }
    ]   
    
})

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;