import { TodoList } from "../src/TodoList"
import { Task } from "../src/Task"

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
