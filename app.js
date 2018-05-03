//Todo List App

//Version 2 Requirements

//store todos
var todos = [];

//function to display todos
function displayTodos(){
	console.log('My Todos: ', todos);
}

//function to add new todo
function addTodo(todo){
	todos.push(todo);
}

//function to change an exisiting todo
function changeTodo(position, newValue){
  todos[position] = newValue;
}

//function to delete an exisiting todo
function deleteTodo(position){
	todos.splice(position, 1);
}




