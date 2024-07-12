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
  DOM.messages = document.getElementById("messages")

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
    const taskItem = document.createElement("div")
    const taskItemTitle = document.createElement("div")
    const taskItemControls = document.createElement("div")
    const linkEdit = document.createElement("a")
    const linkDelete = document.createElement("a")
    const linkComplete = document.createElement("a")

    taskItem.className = "item"
    taskItemTitle.className = "title"
    taskItemTitle.innerHTML = task.name
    taskItemControls.className = "controls"

    linkEdit.innerHTML = "✏️"
    linkDelete.innerHTML = "🗑️"
    linkComplete.innerHTML = "✔️"

    linkEdit.setAttribute("href", "#")
    linkDelete.setAttribute("href", "#")
    linkComplete.setAttribute("href", "#")

    taskItemControls.appendChild(linkEdit)
    taskItemControls.appendChild(linkDelete)
    taskItemControls.appendChild(linkComplete)

    taskItem.appendChild(taskItemTitle)
    taskItem.appendChild(taskItemControls)

    DOM.tasks?.appendChild(taskItem)
  })
}

async function main() {
  await getDataFromJSONServer()
  // welcome message
  addNotification("Welcome!", 3000)
}

function addNotification(message: string, duration: number) {
  const notification = document.createElement("DIV")
  notification.innerHTML = message
  notification.className = "notification"
  DOM.messages?.appendChild(notification)
  setTimeout(() => {
    notification.remove()
  }, duration)
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
