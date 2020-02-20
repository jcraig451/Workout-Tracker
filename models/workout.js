const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
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
    weight: Number,
    reps: Number,
    sets: Number
}]
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;