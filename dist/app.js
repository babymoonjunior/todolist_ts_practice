"use strict";
const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
btnEl.addEventListener("click", function () {
    console.log(inputEl.value);
});
