const mongoose = require("mongoose");
const Service = require("../model/serviceModel");

// Funtion to get all Services from the database
async function getAllServices(req, res, next){

    try {
        const services = await Service.find({})

        return next(
            res.status(200).json(services)
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
async function createService(req, res, next){
   try {
    const serviceData = req.body;

    const newService = await Service.create(serviceData);

    return next(
        res.status(200).json({
            status : "OK",
            message : "Service Successfully Added!"
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

    const service = await Service.findById(id)

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

// Function to update a Service 
async function updateService(req, res, next){

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const service = await Service.findByIdAndUpdate({_id: id}, {
        ...req.body
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

    const service = await Service.findByIdAndDelete(id)

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