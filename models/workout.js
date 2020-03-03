const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

  excerise: [
      {
    type: {
        type: String,
        trim: true,
        required: "Type of excersie"
    },
    name: {
        type: String,
        trim: true,
        require: "Name of excersise"
    },
    duration:{
        type: Number,
        trim: true,
        require: "Please enter duration"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
}]
},
{
    toJSON: {
        virtuals: true
    }

});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;