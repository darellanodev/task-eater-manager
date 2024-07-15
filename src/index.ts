console.log("Starting app Task Eater Manager")

import { TodoList } from "./TodoList.js"
import { Task } from "./Task.js"

interface GlobalDOM {
  form: HTMLFormElement | null
  newTask: HTMLInputElement | null
  tasks: HTMLElement | null
  messages: HTMLElement | null
}

declare global {
  var DOM: GlobalDOM
}

globalThis.DOM = { form: null, newTask: null, tasks: null, messages: null }
const DOM = globalThis.DOM

const todoList = new TodoList()

document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM Content is loaded and ready")
  // get html elements
  DOM.form = document.getElementById("taskform") as HTMLFormElement
  DOM.newTask = document.getElementById("newtask") as HTMLInputElement
  DOM.tasks = document.getElementById("tasks")
  DOM.messages = document.getElementById("messages")

  DOM.form?.addEventListener("submit", (event) => {
    event.preventDefault()

    addTaskFromInput()
    clearInput()
    clearAllTasks()
    showAllTasks()
  })

  main()
})

function clearInput() {
  if (DOM.newTask === null) {
    return
  }
  console.log(`clearing value of input: ${DOM.newTask.value}`)
  DOM.newTask.value = ""
}

function addTaskFromInput() {
  if (DOM.newTask === null) {
    return
  }
  console.log(`adding task from input: ${DOM.newTask.value}`)
  todoList.addTask(new Task(DOM.newTask.value))
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
    const { name } = task

    const taskItem = document.createElement("div")
    taskItem.className = "item"

    const taskItemTitle = document.createElement("div")
    taskItemTitle.className = "title"
    taskItemTitle.innerHTML = name

    const taskItemControls = document.createElement("div")
    taskItemControls.className = "controls"

    const createLink = (text: string) => {
      const link = document.createElement("a")
      link.innerHTML = text
      link.setAttribute("href", "#")
      return link
    }

    const linkEdit = createLink("✏️")
    const linkDelete = createLink("🗑️")
    const linkComplete = createLink("✔️")

    taskItemControls.append(linkEdit, linkDelete, linkComplete)
    taskItem.append(taskItemTitle, taskItemControls)

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
