var db = require("../models");
var mongoose = require("mongoose")
module.exports = function (app){
    
    app.get("/api/workouts",(req,res)=>{
        db.Workout.find().then(results=>{
            res.json(results)
        })
    } ) 

    app.post("/api/workouts",(req, res)=>{
        db.Workout.create(req.body).then(results=>{
            res.json(results)
        })
    })


    app.put("/api/workouts/:id",(req,res)=>{
        const id = mongoose.Types.ObjectId(req.params.id)
        console.log(id)
        console.log(req.body)
        db.Workout.findOneAndUpdate(
            { _id: id }, 
            { $push: { exercises: req.body} },
           function (error, success) {
                 if (error) {
                     console.log(error);
                 } else {
                     res.json(success);
                 }
             });
    })
   
    app.get("/api/workouts/range",(req,res)=>{
        db.Workout.find().then(results=>{
        res.json(results)
        })
    })

}