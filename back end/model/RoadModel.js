const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const roadSchema = new Schema({

    vehicleType : {
        type : String,
        requared: true
    },

    vehicleNumber : {
        type : String,
        requared: true
    },

    roadeNumber : {
        type : String,
        requared: true
    },

    relatedroute : {
        type : String,
        requared: true
    },

    travelTime : {
        type : String,
        requared: true
    },

    startEnd : {
        type : String,
        requared: true
    },

    city1 : {
        type : String
    },

    city2 : {
        type : String
    },

    city3 : {
        type : String
    },

    city4 : {
        type : String
    },

    city5 : {
        type : String
    },

    arrive1 : {
        type : String
    },

    arrive2 : {
        type : String
    },

    arrive3 : {
        type : String
    },

    arrive4 : {
        type : String
    },

    arrive5 : {
        type : String
    },

})

//create DB document name with related schema

const Road = mongoose.model("RoadInfo",roadSchema);

module.exports = Road;
