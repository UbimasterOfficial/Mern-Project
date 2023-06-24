const router = require('express').Router();
let Roads = require('../model/RoadModel');


// Add Route
router.route("/add").post((req,res)=> {

    // using D Structure
    const {vehicleType, vehicleNumber, roadeNumber, relatedroute, travelTime, startEnd, city1, city2, city3, city4, city5, arrive1, arrive2, arrive3, arrive4, arrive5 } = req.body;

    const newRoad =  new Roads({
        vehicleType, vehicleNumber, roadeNumber, relatedroute, travelTime, startEnd, city1, city2, city3, city4, city5, arrive1, arrive2, arrive3, arrive4, arrive5

    })

    newRoad.save().then(() =>{
        //disply this is success
        res.json("*New Route Added*")
    }).catch(()=>{
        console.log(err);
    })
})

// View All Route Information
router.route("/").get((req,res)=>{

    Roads.find().then((roads)=>{
        res.json(roads)
    }).catch((err)=>{
        console.log(err)
    })
})

// Update Specific Route info
router.route('/update/:id').put(async(req,res)=>{
    let userId = req.params.id;

    const {vehicleType, vehicleNumber, roadeNumber, relatedroute, travelTime, startEnd, city1, city2, city3, city4, city5, arrive1, arrive2, arrive3, arrive4, arrive5 } = req.body;

    const updateRoad = {
        vehicleType, vehicleNumber, roadeNumber, relatedroute, travelTime, startEnd, city1, city2, city3, city4, city5, arrive1, arrive2, arrive3, arrive4, arrive5
    }

    const update = await Roads.findByIdAndUpdate(userId,updateRoad).then(() =>{

        res.status(200).send({status : 'Route Updated'})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:'Error With Updating Data'});
    })
})

// Delete Specific Route Info
router.route('/delete/:id').delete(async(req,res) =>{
    let userId = req.params.id;

    await Roads.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: 'Route Infomation Deleted'})
    }).catch((err) =>{
        res.status(500).send({status : 'Error With Delete User'})
    })
})

// View One Route Info
router.route('/get/:id').get(async(req,res) =>{
    let userId =req.params.id;

    await Roads.findById(userId).then((road) =>{
        res.status(200).send({road})
    }).catch((err) =>{
        res.status(500).send({status : 'Error with get user'})
    })
})


module.exports = router;
