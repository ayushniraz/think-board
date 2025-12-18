import express from "express";
import noteRoutes from "./routes/noteRoutes.js";


const app = express();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use("/api/notes", noteRoutes )