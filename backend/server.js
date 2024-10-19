import express from "express"
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./database/connectDB.js";
import cors from "cors"


import userRouter from "./routers/user-router.js"


const PORT = process.env.PORT;


// This Middleware is use to prevent from the Browser Cross Origin Resourse Error 
app.use(cors({
    methods: "GET, POST, PUT, PATCH, DELETE",
    origin : process.env.FRONTEND_URL,
    credentials : true
}))


// These are the Middleware use to get the json data in the vsCode from the Postman or FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// This is the Middleware so that we can use the route in the express 
app.use("/user", userRouter);


// app.get("/", (req, res)=>{
//     res.send("Welcome to the Home Page");
// })

// app.get("/about", (req, res)=>{
//     res.send("Welcome to the About Page");
// })

// app.get("/contact", (req, res)=>{
//     res.send("Welcome to the Contact Page");
// })

connectDB().then(()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else console.log("Server is running at the PORT : ", PORT);
    })
})