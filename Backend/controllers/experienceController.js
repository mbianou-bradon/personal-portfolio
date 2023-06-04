const mongoose = require("mongoose");
const Experience = require("../model/experienceModel");

// Funtion to get all Projects from the database
async function getAllExperiences(req, res, next){

    try {
        const experiences = await Experience.find({})

        return next(
            res.status(200).json(experiences)
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }
    
}

// Function to create a Document to the Database (Add document)
async function createExperience(req, res, next){
    
    const experienceData = req.body;

    try {
        const newExperience = await Experience.create(experienceData);

        return next(
            res.status(200).json({
                status : "OK",
                message : "Experience Successfully Added!"
            })
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            })
        )
    }

    
}

// Function to get One Experience from the Database
async function getOneExperience(req, res, next){

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const experience = await Experience.findById( id)

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
async function updateExperience(req, res, next){

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
async function deleteExperience(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const experience = await Experience.findByIdAndDelete( id)

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

module.exports = {getAllExperiences, getOneExperience, createExperience, updateExperience, deleteExperience}