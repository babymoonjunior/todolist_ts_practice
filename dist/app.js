"use strict";
const inputEl = document.getElementById("input");
const formEl = document.querySelector("form");
formEl.addEventListener("submit", saveData);
function saveData(e) {
    e.preventDefault();
    console.log(inputEl.value);
}
