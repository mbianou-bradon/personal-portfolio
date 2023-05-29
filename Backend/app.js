import Express from "express";
import mongoose from "mongoose";
import projectRouter from "./routes/projectRoutes";
import serviceRouter from "./routes/serviceRoutes";
import experienceRouter from "./routes/experienceRoutes";
import testimonialRouter from "./routes/testimonialRoutes";

const app = Express();


const PORT = process.env.PORT;
const DBURI = process.env.MONGODB_URI;

mongoose.connect(DBURI).then(()=>{
    app.listen(PORT, function(){
        console.log("Listening on port",PORT);
    })

    console.log("Successfully Connected to Database")
})



app.use("/project", projectRouter);
app.use("/services", serviceRouter);
app.use("experiences", experienceRouter);
app.use("/testimonials", testimonialRouter);