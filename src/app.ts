const inputEl = document.getElementById("input")! as HTMLInputElement
const formEl = document.querySelector("form")!
const listEl = document.getElementById("list")!

formEl.addEventListener("submit",saveData)

function saveData(e:SubmitEvent){
    e.preventDefault()
    const message = inputEl.value
    createList(message)
}

function createList(text:string){
    const liEl = document.createElement("li")
    liEl.append(text)
    listEl.append(liEl)
    inputEl.value = ""
}