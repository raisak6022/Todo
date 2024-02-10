const input = document.querySelector("#textOfTodo");
const button = document.querySelector("#submitOfTodo");
const opt = document.querySelector(".output");

let result = [];
let isEditing = false; //conditional redering
let currentIndex; //tracker
function submit() {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim() === "" || null) {
      emptyInput();
    } else {
      if (!isEditing) {
        result.push(input.value);
        input.value = "";
        displayInput(result);
      } else {
        finalTodo();
      }
    }
  });
}

function emptyInput() {
  alert("Please Enter a task");
}

function editTodos(i) {
  isEditing = true;
  currentIndex = i;
  input.value = result[i];
  button.innerText = "UPDATE";
}

function finalTodo() {
  result[currentIndex] = input.value;
  input.value = "";
  displayInput(result);
  isEditing = false;
  button.innerText = "ADD";
}

function deleteTodo(i) {
  console.log(i);
  result = result.filter((_, index) => index !== i);
  displayInput(result);
}

function displayInput(todos) {
  opt.innerHTML = "";

  todos.map((data, i) => {
    //A todo
    let parentElement = document.createElement("div");
    parentElement.setAttribute("class", "parent");

    //Text of todo
    const text = document.createElement("p");
    text.setAttribute("class", "para");
    text.innerHTML = data;

    //Delete Button
    let del = document.createElement("button");
    del.setAttribute("class", "delet");
    del.innerHTML = "❌";
    del.addEventListener("click", () => deleteTodo(i));

    //Edit Button
    let edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    edit.innerHTML = "✏️";
    edit.addEventListener("click", () => editTodos(i));

    //Appending all the text and buttons
    parentElement.appendChild(text);
    parentElement.appendChild(edit);
    parentElement.appendChild(del);

    opt.appendChild(parentElement);
  });
}

submit();
