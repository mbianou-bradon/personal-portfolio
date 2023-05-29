const express = require("express");
const { createService, deleteService, getAllServices, getOneService, updateService } = require("../controllers/serviceController");


const router = express.Router();

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


module.exports = router;