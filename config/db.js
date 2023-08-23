import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://shreyas4545:20169361@cluster0.ywphi58.mongodb.net/StackRuit?retryWrites=true&w=majority"
// console.log(MONGO_URL)

// Connect Database
export const connectDB = mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("DB Connected Succesfully...."))
    .catch((err) => {
        console.log("DB Connection Failed!")
        console.log(err)
        process.exit(1)
    });

export default connectDB;