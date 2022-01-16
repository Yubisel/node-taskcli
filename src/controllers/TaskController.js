const Task = require("../models/Task");
const { connection } = require("../db");

const listTask = async () => {
  const lTasks = await Task.find().lean();
  console.table(lTasks.map(oTask => ({
    id: oTask._id.toString(),
    title: oTask.title,
    description: oTask.description
  })));
  await connection.close();
  process.exit(0);
}

const addTask = async (oTask) => {
  await Task.create(oTask);
  console.log("New task created");
  await connection.close();
}

const updateTask = async (id, newTask) => {
  await Task.updateOne({ id }, newTask);
  console.log("Task updated");
  await connection.close();
}

const removeTask = async (id) => {
  await Task.findByIdAndDelete(id);
  console.log("Task deleted");
  await connection.close();
}

const findTask = async (criteria) => {
  const search = new RegExp(criteria, "i");
  const lTasks = await Task.find({
    $or: [{ title: search }, { description: search }]
  });
  if (lTasks.length === 0) {
    console.log("No tasks found");
  } else {
    console.table(lTasks.map(oTask => ({
      id: oTask._id.toString(),
      title: oTask.title,
      description: oTask.description
    })));
  }
  await connection.close();
  process.exit(0);
}

module.exports = {
  listTask,
  addTask,
  updateTask,
  removeTask,
  findTask
};