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
}
