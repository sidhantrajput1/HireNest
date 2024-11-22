import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
import connectDB from "./utils/db.js";
import dotenv from "dotenv"
dotenv.config({})

app.get('/' , (req, res) => {
    return res.status(200).json({ 
        message: 'I am coming from backend',
        success : true
    })
})


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin : 'http://localhost:5173',
    credentials : true
}
app.use(cors(corsOption))


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Sever running ar port ${PORT}`)
})