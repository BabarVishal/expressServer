const mongoose = require("mongoose");

async function DbConection(){
    return mongoose.connect("mongodb://127.0.0.1:27017/DSA")
}

module.exports = {
    DbConection
}