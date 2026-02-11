const express = require("express");


const ListingRoutes = require("./routes/ListingRoutes.js")

const app = express();
const ConnectDB = require("./config/db.js")

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get("/" , (req , res)=>{
    res.send("This is Root Route")
})


app.use("/api" , ListingRoutes)


app.listen(8080 , () =>{
    console.log("Server is listning to the port 8080")
})


