import { Task } from "../../src/Task"

test("get name from an item", () => {
  const task = new Task("get a bottle of milk")

  const result = task.name
  expect(result).toBe("get a bottle of milk")
})
