const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");


router.post("/", async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedHabit) {
      return res.status(404).json({ message: "Hábito no encontrado" });
    }

    res.json(updatedHabit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);

    if (!deletedHabit) {
      return res.status(404).json({ message: "Hábito no encontrado" });
    }

    res.json({ message: "Hábito eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id/done", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ message: "Hábito no encontrado" });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let lastDate = null;
    if (habit.lastCompletedDate) {
      lastDate = new Date(habit.lastCompletedDate);
      lastDate.setHours(0, 0, 0, 0);
    }

    if (!lastDate) {
      habit.streak = 1;
      habit.completedToday = true;
      habit.lastCompletedDate = today;
    } else {
      const diffTime = today - lastDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      if (diffDays === 0) {
        return res.status(400).json({ message: "Este hábito ya fue marcado hoy" });
      } else if (diffDays === 1) {
        habit.streak += 1;
        habit.completedToday = true;
        habit.lastCompletedDate = today;
      } else {
        habit.streak = 1;
        habit.completedToday = true;
        habit.lastCompletedDate = today;
      }
    }

    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;