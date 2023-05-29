import Express from "express";
import projectRouter from "./routes/projectRoutes";
import serviceRouter from "./routes/serviceRoutes";
import experienceRouter from "./routes/experienceRoutes";
import testimonialRouter from "./routes/testimonialRoutes";

const app = Express();


const PORT = 4000;
app.listen(PORT, function(){
    console.log("Listening on port",PORT);
})

app.use("/project", projectRouter);
app.use("/services", serviceRouter);
app.use("experiences", experienceRouter);
app.use("/testimonials", testimonialRouter);