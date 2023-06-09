const mongoose = require("mongoose");
const Testimonial = require("../model/testimonialModel");

// Funtion to get all Testimonials from the database
async function getAllTestimonials(req, res, next){
    try {
        const testimonials = await Testimonial.find({})

        return next(
            res.status(200).json(testimonials)
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
async function createTestimonial(req, res, next){
    
    const testimonialData = req.body;

    try {
        const newTestimonial  = await Testimonial.create(testimonialData);

        return next(
            res.status(200).json({
                status : "OK",
                message : "Testimonial Successfully Added!"
            })
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message : `${error}`
            })
        )
    }

    
}

// Function to get One Testimonial from the Database
async function getOneTestimonial(req, res, next){

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const testimonial = await Testimonial.findById({ _id : id })

    if(!testimonial){
        return next(
            res.status(404).json({
                message: "Testimonial Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(testimonial)
    )
}

// Function to update a Testimonial 
async function updateTestimonial(req, res, next){

    const { id } = req.params;

    const updates = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const testimonial = await Testimonial.findByIdAndUpdate({_id: id}, {
        ...req.body, updates
    })

    if(!testimonial){
        return next(
            res.status(404).json({
                message: "Testimonial Not Found!"
            })
        )
    }

    return next(
        res.status(200).json(testimonial)
    )
}

// Function to delete a Testimonial from the Database
async function deleteTestimonial(req, res, next){
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        )
    }

    const testimonial = await Testimonial.findByIdAndDelete({ _id : id })

    if(!testimonial){
        return next(
            res.status(404).json({
                message: "testimonial Not Found!"
            })
        )
    }

    return next(
        res.status(200).json({
            status : "OK",
            message : "testimonial Successfully Deleted!"
        })
    )
}

module.exports = { createTestimonial, getAllTestimonials, getOneTestimonial, updateTestimonial, deleteTestimonial}