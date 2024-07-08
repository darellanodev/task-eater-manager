import { TodoList } from "../../src/TodoList"
import { Task } from "../../src/Task"

test("get tasks", () => {
  const todoList = new TodoList()

  const tasks = todoList.tasks
  expect(tasks).toHaveLength(0)
})

test("add task", () => {
  const todoList = new TodoList()
  const task = new Task("buy a bottle of milk")
  todoList.addTask(task)
  const tasks = todoList.tasks
  expect(tasks).toHaveLength(1)
})

test("remove task", () => {
  const todoList = new TodoList()
  todoList.addTask(new Task("buy a bottle of milk"))
  todoList.addTask(new Task("buy a cup of coffee"))
  todoList.addTask(new Task("buy the newspaper"))
  todoList.removeTask("buy a cup of coffee")
  const tasks = todoList.tasks
  expect(tasks).toHaveLength(2)
})
