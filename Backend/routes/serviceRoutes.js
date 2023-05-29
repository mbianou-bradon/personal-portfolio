import Express from "express";
import { createService, deleteService, getAllServices, getOneService, updateService } from "../controllers/serviceController";


const router = Express.Router();

// Get all Services
router.get("/",getAllServices);

// Get One Service 
router.get("/:id", getOneService);

// Create a Service
router.post("/", createService);

// Update a Service
router.patch("/:id", updateService);

// Delete a Service
router.delete("/:id", deleteService);


export default router;