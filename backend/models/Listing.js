const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    image:{
        url:String,
        filename:String
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    contry:String
});


const ListingModel = mongoose.model("Listing" , listingSchema);

module.exports = ListingModel;