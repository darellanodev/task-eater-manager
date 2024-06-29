import { Item } from "../src/Item"

test("get name from an item", () => {
  const item = new Item("get a bottle of milk")

  const result = item.name
  expect(result).toBe("get a bottle of milk")
})
