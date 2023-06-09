const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Give title to the service you offer"],
        unique: [true, "Title of the service must be unique"]
    },
    description : {
        type: [String]
    }
},{timestamps: true})

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;