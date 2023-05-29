const express = require("express");
const  {createProject, deleteProject, getAllProjects, getOneProject, updateProject } = require("../controllers/projectController");


const router = express.Router();

// Get all Projects
router.get("/",getAllProjects);

// Get One Project 
router.get("/:id", getOneProject)


// Create a Project
router.post("/", createProject)

// Update a Project
router.patch("/:id", updateProject)

// Delete a Project
router.delete("/:id", deleteProject)


module.exports = router;

