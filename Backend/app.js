const express = require("express");
const mongoose = require("mongoose");
const projectRouter = require("./routes/projectRoutes");
const serviceRouter = require("./routes/serviceRoutes");
const experienceRouter = require("./routes/experienceRoutes");
const testimonialRouter = require("./routes/testimonialRoutes");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: "./vars/.env"})
}

const app = express();

const PORT = process.env.PORT;
const DBURI = process.env.;

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

// Defining Routes
app.use("/project", projectRouter);
app.use("/services", serviceRouter);
app.use("experiences", experienceRouter);
app.use("/testimonials", testimonialRouter);