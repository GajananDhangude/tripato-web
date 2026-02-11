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
    location:{
        type:String,
        required:true
    },
    contry:String
});


const ListingModel = mongoose.model("Listing" , listingSchema);

module.exports = ListingModel;