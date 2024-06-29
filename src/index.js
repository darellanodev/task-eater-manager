console.log("Starting app Task Eater Manager")

import { TodoList } from "./TodoList.js"
import { Task } from "./Task.js"

globalThis.DOM = {}
const DOM = globalThis.DOM

document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM Content is loaded and ready")
  DOM.form = document.getElementById("taskform")
  DOM.newTask = document.getElementById("newtask")
  DOM.tasks = document.getElementById("tasks")

  const todoList = new TodoList()
  DOM.form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(
      `Submit button clicked, with new task value: ${DOM.newTask.value}`,
    )
    // add task
    const element = document.createElement("p")
    element.innerHTML = DOM.newTask.value
    DOM.tasks.appendChild(element)
  })
})
