const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const deleteSchema = new Schema({

    deleteNote : {
        type : String,
        requared: true
    },

    adminName : {
        type : String,
        requared: true
    }
})

//create DB document name with related schema

const DeleteInfo = mongoose.model("DeletedRoadInfo",deleteSchema);

module.exports = DeleteInfo;