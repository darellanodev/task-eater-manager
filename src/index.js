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
    // add task
    console.log(`adding new task: ${DOM.newTask.value}`)
    todoList.addTask(new Task(DOM.newTask.value))
    // clear all
    console.log("clearing all tasks")
    DOM.tasks.innerHTML = ""
    // show all
    console.log("showing all tasks")
    todoList.tasks.forEach((task) => {
      const element = document.createElement("p")
      element.innerHTML = task.name
      DOM.tasks.appendChild(element)
    })
  })
})
