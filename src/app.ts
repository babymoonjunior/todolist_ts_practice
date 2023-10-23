const btnEl = document.getElementById("btn")! as HTMLButtonElement
const inputEl = document.getElementById("input")! as HTMLInputElement
btnEl.addEventListener("click",function(){
    console.log(inputEl.value);
})

