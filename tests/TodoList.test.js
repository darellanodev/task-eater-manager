import { TodoList } from "../src/TodoList"

test("get tasks", () => {
  const todoList = new TodoList()

  const tasks = todoList.tasks
  expect(tasks).toHaveLength(0)
})
