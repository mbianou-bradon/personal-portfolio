const express = require("express");
const mongoose = require("mongoose");
const projectRouter = require("./routes/projectRoutes");
const serviceRouter = require("./routes/serviceRoutes");
const experienceRouter = require("./routes/experienceRoutes");
const testimonialRouter = require("./routes/testimonialRoutes");
const cors = require("cors");
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: "./vars/.env"})
}

const app = express();

const PORT = process.env.PORT;
const DBURI = process.env.MONGODB_URI;

// Connecting to Database
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    app.listen(PORT, function(){
        console.log("Listening on port",PORT);
    })

    console.log("Successfully Connected to Database")
})

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})
app.use(cors({
    "origin": ["http://127.0.0.1:3000", "http://localhost:3000", "https://mbianoubradon-personal-portfolio.vercel.app"],
    "methods": ["GET","POST","PATCH","DELETE"]
}));

// Defining Routes
app.use("/api/projects", projectRouter);
app.use("/api/services", serviceRouter);
app.use("/api/experiences", experienceRouter);
app.use("/api/testimonials", testimonialRouter);