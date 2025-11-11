import ToDo from "../models/to-do.model.js";

export const addTodoController = async (req, res) => {
  const { title, description, dueDate, completed } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const exestingTodo = await ToDo.findOne({ title });
    if (exestingTodo) {
      return res.status(409).json({ message: "Todo with this title already exists" });
    }

    const newTodo = new ToDo({
      title,
      description,
      dueDate,
      completed,
    });

    newTodo.save();
    res.status(201).json({ message: "Todo added successfully", todo: newTodo });

  } catch (error) {
    console.log("Error adding todo:", error);
  }

}

export const getTodosController = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json({ message: "all todo", todos });
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
}


export const updateTodoController = async (req, res) => {
  try {

    const todoId = req.params._id;

    const { title, description, dueDate, completed } = req.body;

    if (!title || !description || !dueDate) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const updatedTodo = await ToDo.findByIdAndUpdate(todoId,
      {
        $set: { title, description, dueDate, completed },
      }, { new: true })

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" })
    }

    res.status(201).json({
      message: "Todo updated successfully",
      data: updatedTodo,
    })

  } catch (error) {
    console.log("Error in updateTodo", error)
  }


}

export const deleteTodoController = async (req, res) => {
  try {
    const todoId = req.params._id;

    const deletedTodo = await ToDo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" })
    }

    res.status(200).json({ message: "Todo deleted successfully" })

  } catch (error) {
    console.log("Error in deleteTodo", error)
  }


}

export const getTodosByIdController = async (req, res) => {
  try {
    const { _id } = req.params;
    const todo = await ToDo.findById({ _id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.log("Error fetching todo by ID:", error);
  }
}