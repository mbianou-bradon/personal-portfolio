const express = require("express");
const { createTestimonial, deleteTestimonial, getAllTestimonials, getOneTestimonial, updateTestimonial } = require("../controllers/testimonialController");



const router = express.Router();

// Get all Testimonials
router.get("/",getAllTestimonials);

// Get One Testimonial 
router.get("/:id", getOneTestimonial);


// Create a Testimonial
router.post("/", createTestimonial);

// Update a Testimonial
router.patch("/:id", updateTestimonial);

// Delete a Testimonial
router.delete("/:id", deleteTestimonial);


module.exports = router;