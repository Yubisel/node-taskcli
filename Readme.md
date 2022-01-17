# Taskcli line command tool

Taskcli line command tool to storage tasks in mongodb database

## Install

Clone or download the repo.

```bash
git clone git@github.com:Yubisel/node-taskcli.git
```

Install all dependencies with ```npm install``` inside the folder, create the .env file with the constant ```MONGOGB_URI``` and the route to mongodb database conection. After that run ```npm link``` to link the command.

## How to use

```bash
Usage: index [options] [command]

A command line tool

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  list|l             List all tasks
  save|s             Save new task
  delete|d <id>      Delete a task by id
  update|u <id>      Update a task by id
  find|f <criteria>  Find task with the criteria parameter inside
  help [command]     display help for command
```
