const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const CookieParser = require("cookie-parser")
const cors = require("cors");

const ListingRoutes = require("./routes/ListingRoutes.js")
const AuthRoutes = require("./routes/AuthRoutes.js"); 

const app = express();
const ConnectDB = require("./config/db.js")

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(CookieParser());

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(corsOptions))



app.get("/" , (req , res)=>{
    res.send("This is Root Route")
})


app.use("/api" , ListingRoutes)
app.use("/api" , AuthRoutes)


app.listen(8080 , () =>{
    console.log("Server is listning to the port 8080")
})


