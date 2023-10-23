"use strict";
const inputEl = document.getElementById("input");
const formEl = document.querySelector("form");
const listEl = document.getElementById("list");
formEl.addEventListener("submit", saveData);
function saveData(e) {
    e.preventDefault();
    const message = inputEl.value;
    createList(message);
}
function createList(text) {
    const liEl = document.createElement("li");
    liEl.append(text);
    listEl.append(liEl);
    inputEl.value = "";
}
