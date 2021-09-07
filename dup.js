const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

todobutton.addEventListener("click", addtodo);
var array = JSON.parse(localStorage.getItem('array')) || [];
function addtodo(event) {
           
// 	event.stopImmediatePropagation()
	console.log(todoinput.value);
     
     
	if (todoinput.value) {
		event.preventDefault();
		array.push(todoinput.value);
		localStorage.setItem('array', JSON.stringify(array));
		todoinput.value = "";
		const todoitem = document.createElement("li");
		todoitem.innerHTML = array[array.length - 1];
		todolist.appendChild(todoitem);
	}
}
