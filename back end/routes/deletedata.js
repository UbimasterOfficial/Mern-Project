const router = require('express').Router();
let Deletes = require('../model/DeleteInfoModel');


// Add Route
router.route("/add").post((req,res)=> {

    // using D Structure
    const {deleteNote, adminName} = req.body;

    const newDeletes =  new Deletes({
        deleteNote, adminName

    })

    newDeletes.save().then(() =>{
        //disply this is success
        res.json("*New Delete Info Added*")
    }).catch(()=>{
        console.log(err);
    })
})



module.exports = router;