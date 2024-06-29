import { Task } from "./Task"

export class TodoList {
  #tasks: Task[]
  constructor() {
    this.#tasks = []
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
