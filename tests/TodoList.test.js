import { TodoList } from '../src/TodoList'

test('get items', () => {
    const todoList = new TodoList()

    const items = todoList.items
    expect(items).toHaveLength(0)
})