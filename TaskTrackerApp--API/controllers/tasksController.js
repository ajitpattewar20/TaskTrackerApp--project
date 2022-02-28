const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

// @desc get Task
// @route GET Omg5Ed72LTgzDIcLPxg6/api/task
// @access Private
const getTask = asyncHandler(async (req, res) => {
  const returnTasks = await Task.find();

  res.status(200).json(returnTasks);
});

// @desc set setTask
// @route POST Omg5Ed72LTgzDIcLPxg6/api/task
// @access Private
const setTask = asyncHandler(async (req, res) => {
  if (!req.body.email && !req.body.taskName) {
    res.status(400);
    throw new Error("please add a email field");
  }

  const task = await Task.create({
    email: req.body.email,
    taskgroup: req.body.taskgroup,
    taskName: req.body.taskName,
    description: req.body.description,
    reminder: req.body.reminder,
    remindToEmail: req.body.remindToEmail,
  });
  res.status(200).json(task);
});

// @desc update updateTask
// @route PUT Omg5Ed72LTgzDIcLPxg6/api/task
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("task not found");
  }
  const updatedTask = await Task.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

// @desc delete deleteTask
// @route DELETE Omg5Ed72LTgzDIcLPxg6/api/task
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("task not found");
  }

  await task.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTask,
  setTask,
  updateTask,
  deleteTask,
};
