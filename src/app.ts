const inputEl = document.getElementById("input")! as HTMLInputElement
const formEl = document.querySelector("form")!
const listEl = document.getElementById("list")!
formEl.addEventListener("submit",saveData)

interface Task{
    name:string,
    completed:boolean
}

const tasks:Task[]=[]

function saveData(e:SubmitEvent){
    e.preventDefault()
    const newTask:Task={
        name:inputEl.value,
        completed:false
    }
    createList(newTask)
    tasks.push(newTask)
    console.log(tasks);
    
}

function createList(task:Task){
    const liEl = document.createElement("li")
    const checkboxEl = document.createElement("input")
    checkboxEl.type = "checkbox"
    liEl.append(task.name)
    liEl.append(checkboxEl)
    listEl.append(liEl)
    inputEl.value = ""
}