export class TodoList {
  #tasks
  constructor() {
    this.#tasks = []
  }
  get tasks() {
    return this.#tasks
  }
  addTask(task) {
    this.#tasks.push(task)
  }
  removeTask(taskText) {
    this.#tasks = this.#tasks.filter((task) => task.name !== taskText)
  }
}
