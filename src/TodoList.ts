import { Task } from "./Task"

export class TodoList {
  static #instance: TodoList | null = null
  #tasks: Task[]
  constructor() {
    if (TodoList.#instance !== null) {
      throw new Error(
        "TodoList is a singleton class, use getInstance to get the instance",
      )
    }
    this.#tasks = []
  }
  static getInstance() {
    if (TodoList.#instance === null) {
      TodoList.#instance = new TodoList()
    }
    return TodoList.#instance
  }
  get tasks() {
    return this.#tasks
  }
  addTask(task: Task) {
    this.#tasks.push(task)
  }
  removeTask(taskText: string) {
    this.#tasks = this.#tasks.filter((task) => task.name !== taskText)
  }
}
