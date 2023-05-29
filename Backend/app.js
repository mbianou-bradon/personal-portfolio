import Express from "express";
import router from "./routes/projectRoutes";

const app = Express();


const PORT = 4000;
app.listen(PORT, function(){
    console.log("Listening on port",PORT);
})

app.use("/project", router);