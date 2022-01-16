const { program } = require("commander");
const { prompt } = require("inquirer");
const { addTask, listTask, removeTask, updateTask, findTask } = require("./controllers/TaskController");

const taskQuestions = [
  {
    type: "input",
    message: "Task title",
    name: "title"
  },
  {
    type: "input",
    message: "Task description",
    name: "description"
  }
];

program.version("0.0.1").description("A command line tool");

program
  .command("list")
  .alias("l")
  .description("List all tasks")
  .action(() =>
    listTask()
  );

program
  .command("save")
  .alias("s")
  .description("Save new task")
  .action(async () => {
    const answers = await prompt(taskQuestions);
    addTask(answers);
  });

program
  .command("delete <id>")
  .alias("d")
  .description("Delete a task by id")
  .action((id) =>
    removeTask(id)
  );

program
  .command("update <id>")
  .alias("u")
  .description("Update a task by id")
  .action(async (id) => {
    const answers = await prompt(taskQuestions);
    await updateTask(id, answers);
  });


program
  .command("find <criteria>")
  .alias("f")
  .description("Find task with the criteria parameter inside")
  .action((criteria) =>
    findTask(criteria)
  );

program.parse(process.argv);