const express = require("express");
const { createExperience, deleteExperience, getAllExperiences, getOneExperience, updateExperience } = require("../controllers/experienceController");

const router = express.Router();

// Get all Experience
router.get("/",getAllExperiences);

// Get One Experience 
router.get("/:id", getOneExperience);


// Create a Experience
router.post("/", createExperience);

// Update a Experience
router.patch("/:id", updateExperience);

// Delete a Experience
router.delete("/:id", deleteExperience);


module.exports = router;