"use strict";
const inputEl = document.getElementById("input");
const formEl = document.querySelector("form");
const listEl = document.getElementById("list");
formEl.addEventListener("submit", saveData);
const tasks = [];
function saveData(e) {
    e.preventDefault();
    const newTask = {
        name: inputEl.value,
        completed: false
    };
    createList(newTask);
    tasks.push(newTask);
    console.log(tasks);
}
function createList(task) {
    const liEl = document.createElement("li");
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    liEl.append(task.name);
    liEl.append(checkboxEl);
    listEl.append(liEl);
    inputEl.value = "";
}
