import Express from "express";
import { createTestimonial, deleteTestimonial, getAllTestimonials, getOneTestimonial, updateTestimonial } from "../controllers/testimonialController";



const router = Express.Router();

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


export default router;