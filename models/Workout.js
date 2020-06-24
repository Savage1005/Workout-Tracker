const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,

        },
        exercises:[
            {type: {
                type: String,
                trim: true,
                required: "The type of exercise is required."
            },
             name: {
                 type:String,
                 trim: true,
                 required: "Name required."
             },
             duration:{
                 type: Number,
                 required: "Duration time in minutes required."
             },
             weight:{
                 type: Number
             },
             reps: {
                 type: Number
             },
             sets: {
                 type: Number
             },
             distance:{
                 type: Number
             },
            
        }]
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

