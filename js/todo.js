const toDoForm = document.getElementById("todo-form");
const ToDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
//localstroage 를 위한 변수, 텍스트만 저장 가능.
let toDos = [];

function saveToDos(){
    //array를 String로 변환
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    //어떤 버턴을 클릭을 확인
   // console.dir(event.target.parentElement.innerText);
   const li = event.target.parentElement;
   li.remove();
   
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
   

}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    //sapn을 li태그 안에 위치하기 위함
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)

}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    const newTodoObj ={
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleTodoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}


