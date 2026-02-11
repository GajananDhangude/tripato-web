const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/Listing.js");

const ConnectDB = require("../config/db.js")

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>  ({...obj , owner : "6777823a85bbfb90a6a2f634"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
};

initDB();