import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/")
})

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Task Eater Manager/)
})

test("should me allow to add a todo item", async ({ page }) => {
  const newTodo = page.getByPlaceholder("write a new task here")

  await newTodo.fill("buy a bottle of milk")
  await newTodo.press("Enter")

  await expect(page.getByTestId("tasks")).toHaveText("buy a bottle of milk")
})
