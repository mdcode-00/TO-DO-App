import mongoose from "mongoose";


const toDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    dueDate: {
      type: Date,
      required: false
    }

  },
  { timestamps: true });

const ToDo = mongoose.model("ToDo", toDoSchema);

export default ToDo;
