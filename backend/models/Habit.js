const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    streak: {
      type: Number,
      default: 0,
    },
    completedToday: {
      type: Boolean,
      default: false,
    },
lastCompletedDate: {
  type: Date,
  default: null,
},  
  },
  { timestamps: true }
);


module.exports = mongoose.model("Habit", habitSchema);
