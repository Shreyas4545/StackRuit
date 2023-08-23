import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config();
const app = express()
import cookieParser from "cookie-parser"

//cookies and filemiddleware
app.use(cookieParser())


// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import all routes here
import userRoutes from "./routes/userRoutes.js"

// router middleware
app.use("/api", userRoutes);

app.get("/", function (req, res) {
    return res.status(200).json({
        success: true,
        message: "Hello ! Let's Take StackRuit to Greater Heights"
    })
})

export default app;