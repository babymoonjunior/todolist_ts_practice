
const inputEl = document.getElementById("input")! as HTMLInputElement
const formEl = document.querySelector("form")!

formEl.addEventListener("submit",saveData)

function saveData(e:SubmitEvent){
    e.preventDefault()
    console.log(inputEl.value)
}