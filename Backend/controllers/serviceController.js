const mongoose = require("mongoose");
const Service = require("../model/serviceModel");

// Funtion to get all Services from the database
async function getAllServices(req, res, next){

    const services = await Service.find({}).sort({ createdAt: -1 })

    return next(
        res.status(200).json(services)
    )
}

// Function to create a Document to the Database (Add document)
async function createService(req, res, next){
    
    const serviceData = req.body;

    const newService = await Service.create(serviceData);

    return next(
        res.status(200).json({
            status : "OK",
            message : "Service Successfully Added!"
        })
    )
}

// Function to get One Service from the Database
async function getOneService(req, res, next){

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const service = await Service.findById({ _id : id })

    if(!service){
        return next(
            res.status(404).json({
                message: "Service Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(project)
    )
}

// Function to update a Service 
async function updateService(req, res, next){

    const { id } = req.params;

    const updates = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const service = await Service.findByIdAndUpdate({_id: id}, {
        ...req.body, updates
    })

    if(!service){
        return next(
            res.status(404).json({
                message: "Service Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(service)
    )
}

// Function to delete a Service from the Database
async function deleteService(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const service = await Service.findByIdAndDelete({ _id : id })

    if(!service){
        return next(
            res.status(404).json({
                message: "Service Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "Service Successfully Deleted!"
        })
    )
}

module.exports = { createService, getAllServices, getOneService, updateService, deleteService}