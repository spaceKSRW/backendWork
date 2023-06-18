const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req, res) => {
  try {
    //fetch all too items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todos data fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
exports.getTodoById = async (req, res) => {
  try {
    //extract todo items via id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    //data for given id not found

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "no data found with given id",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: `data for if ${id} successfully fetched!!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
