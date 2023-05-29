import mongoose from "mongoose";
import Experience from "../model/experienceModel";

// Funtion to get all Projects from the database
export async function getAllExperiences(req, res, next){

    const experiences = await Experience.find({}).sort({ createdAt: -1 })

    return next(
        res.status(200).json(experiences)
    )
}

// Function to create a Document to the Database (Add document)
export async function createExperience(req, res, next){
    
    const experienceData = req.body;

    const newExperience = await Project.create(experienceData);

    return next(
        res.status(200).json({
            status : "OK",
            message : "Experience Successfully Added!"
        })
    )
}

// Function to get One Experience from the Database
export async function getOneExperience(req, res, next){

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const experience = await Experience.findById({ _id : id })

    if(!experience){
        return next(
            res.status(404).json({
                message: "Experience Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(experience)
    )
}

// Function to update a Experience 
export async function updateExperience(req, res, next){

    const { id } = req.params;

    const updates = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const experience = await Experience.findByIdAndUpdate({_id: id}, {
        ...req.body, updates
    })

    if(!experience){
        return next(
            res.status(404).json({
                message: "Experience Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(experience)
    )
}

// Function to delete a Experience from the Database
export async function deleteExperience(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const experience = await Experience.findByIdAndDelete({ _id : id })

    if(!experience){
        return next(
            res.status(404).json({
                message: "Project Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Experience Successfully Deleted!"
        })
    )
}