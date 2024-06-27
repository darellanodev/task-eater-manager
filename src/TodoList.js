export class TodoList {
    #items
    constructor() {
        this.#items = []
    }
    get items() {
        return this.#items 
    }
}