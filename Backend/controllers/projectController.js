import mongoose from "mongoose";
import Project from "../model/projectModel"

// Funtion to get all Projects from the database
export async function getAllProjects(req, res, next){

    const projects = await Project.find({}).sort({ createdAt: -1 })

    return next(
        res.status(200).json(projects)
    )
}

// Function to create a Document to the Database (Add document)
export async function createProject(req, res, next){
    
    const projectData = req.body;

    const newProject = await Project.create(projectData);

    return next(
        res.status(200).json({
            status : "OK",
            message : "Project Successfully Added!"
        })
    )
}

// Function to get One Project from the Database
export async function getOneProject(req, res, next){

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const project = await Project.findById({ _id : id })

    if(!project){
        return next(
            res.status(404).json({
                message: "Project Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(project)
    )
}

// Function to update a Project 
export async function updateProject(req, res, next){

    const { id } = req.params;

    const updates = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const project = await Project.findByIdAndUpdate({_id: id}, {
        ...req.body, updates
    })

    if(!project){
        return next(
            res.status(404).json({
                message: "Project Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(project)
    )
}

// Function to delete a Project from the Database
export async function deleteProject(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const project = await Project.findByIdAndDelete({ _id : id })

    if(!project){
        return next(
            res.status(404).json({
                message: "Project Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Project Successfully Deleted!"
        })
    )
}


