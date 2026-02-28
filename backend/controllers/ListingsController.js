const express = require("express");
const ListingModel = require("../models/Listing.js");


async function getAllListings(req , res) {

    const allListings = await ListingModel.find({});
    
    if(!allListings){
        return res.status(401).json({message:"Litings Not found"})
    }

    res.status(200).json({
        allListings
    })
}


async function getListing(req , res){
    const {id} = req.params;
    
    if(!id){
        return res.status(401).json({message:"id Not found"})
    }

    const listing = await ListingModel.findById(id)

    if(!listing){
        return res.status(401).json({message:" listing Not Found"})
    }

    res.status(201).json({
        message:"Listing Found Successfull.",
        listing
    })
    
}





module.exports = {
    getAllListings,
    getListing
}