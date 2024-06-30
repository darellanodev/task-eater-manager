console.log("Starting app Task Eater Manager")

import { TodoList } from "./TodoList.js"
import { Task } from "./Task.js"

interface GlobalDOM {
  [key: string]: HTMLElement | HTMLInputElement | null
}
declare global {
  var DOM: GlobalDOM
}

globalThis.DOM = {}
const DOM = globalThis.DOM

const todoList = new TodoList()

document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM Content is loaded and ready")
  // get html elements
  DOM.form = document.getElementById("taskform")
  DOM.newTask = document.getElementById("newtask")
  DOM.tasks = document.getElementById("tasks")

  DOM.form?.addEventListener("submit", (event) => {
    event.preventDefault()

    addTaskFromInput()
    clearAllTasks()
    showAllTasks()
  })

  main()
})

function addTaskFromInput() {
  if (DOM.newTask instanceof HTMLInputElement) {
    console.log(`adding task from input: ${DOM.newTask.value}`)
    todoList.addTask(new Task(DOM.newTask.value))
  }
}

function clearAllTasks() {
  console.log("clear all tasks")
  if (DOM.tasks !== null) {
    DOM.tasks.innerHTML = ""
  }
}

function showAllTasks() {
  console.log("show all tasks")
  todoList.tasks.forEach((task) => {
    const element = document.createElement("p")
    element.innerHTML = task.name
    DOM.tasks?.appendChild(element)
  })
}

async function main() {
  await getDataFromJSONServer()
}

async function getDataFromJSONServer() {
  console.log("calling to getDataFromJSONServer")
  try {
    const response = await fetch("http://localhost:3000/tasks")
    const data = await response.json()
    createTasksFromJson(data)
    clearAllTasks()
    showAllTasks()
  } catch (error) {
    console.log(error)
  }
}

function createTasksFromJson(data: any) {
  data.forEach((jsonTask: any) => {
    console.log(`adding task from json-server: ${jsonTask.name}`)
    todoList.addTask(new Task(jsonTask.name))
  })
}
