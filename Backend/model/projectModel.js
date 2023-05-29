import mongoose from "mongoose";

const project = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "A project must have a title, Please give a title"],
        unique : [true, "Please project name should be unique"]
    },
    githubLink: {
        type: String,
        required: [true, "A project must have a GitHub Link"]
    },
    liveLink : {
        type: String,
    },
    images : {
        type: String,
        required: [true, "A project must have at least one image"]
    }
},{ timestamps: true});

const Project = mongoose.model('Project',project);

export default Project;
