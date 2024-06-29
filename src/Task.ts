export class Task {
  #name
  constructor(name: string) {
    this.#name = name
  }
  get name() {
    return this.#name
  }
}
