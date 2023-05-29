import Express from "express";
import  {createProject, deleteProject, getAllProjects, getOneProject, updateProject } from "../controllers/projectController";


const router = Express.Router();

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


export default router;

