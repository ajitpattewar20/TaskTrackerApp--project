const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please add a user Email"],
    },
    taskgroup: {
      type: String,
      required: [true, "please select task group"],
    },
    taskName: {
      type: String,
      required: [true, "please add a task Name"],
    },
    description: {
      type: String,
    },
    reminder: {
      type: String,
      required: [true, "want a reminder"],
    },
    remindToEmail: {
      type: String,
      required: [true, "please add a remindToEmail"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tasks", taskSchema);
/**
 * 
 *  
 * {
    email: req.body.email,
    taskgroup: req.body.taskgroup,
    taskName: req.body.taskName,
    description:req.body.description,
    reminder: req.body.reminder,
    remindToEmail:req.body.remindToEmail,
 }
 * 
 */
