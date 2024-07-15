import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/")
})

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/Task Eater Manager/)
})

test("should me allow to add a todo item", async ({ page }) => {
  const newTodo = page.getByPlaceholder("Write your next task here")

  await newTodo.fill("buy a bottle of milk")
  await newTodo.press("Enter")

  await expect(page.getByTestId("tasks")).toHaveText(/buy a bottle of milk/)
})

test("should clear the input after adding a task", async ({ page }) => {
  const newTodo = page.getByPlaceholder("Write your next task here")

  await newTodo.fill("buy a bottle of milk")
  await newTodo.press("Enter")

  await expect(newTodo).toBeEmpty()
})
